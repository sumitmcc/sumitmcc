import { InstagramMedia, InstagramResponse } from "@/lib/types";

export class InstagramAPI {
  private accessToken: string;
  private userId: string;

  constructor(accessToken: string, userId: string) {
    this.accessToken = accessToken;
    this.userId = userId;
  }

  async getUserMedia(limit = 25): Promise<InstagramMedia[]> {
    const fields =
      "id,media_type,media_url,permalink,caption,timestamp,alt_text";
    const url = `https://graph.instagram.com/${this.userId}/media?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data: InstagramResponse = await response.json();

      // Filter for images and carousel albums
      const mediaItems = data.data.filter(
        (item) =>
          item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM"
      );

      // For carousel albums, fetch children
      const enrichedMedia = await Promise.all(
        mediaItems.map(async (item) => {
          if (item.media_type === "CAROUSEL_ALBUM") {
            try {
              const childrenFields = "id,media_type,media_url";
              const childrenUrl = `https://graph.instagram.com/${item.id}/children?fields=${childrenFields}&access_token=${this.accessToken}`;
              const childrenResponse = await fetch(childrenUrl);

              if (childrenResponse.ok) {
                const childrenData = await childrenResponse.json();
                return {
                  ...item,
                  children: childrenData.data.filter(
                    (child: InstagramMedia) => child.media_type === "IMAGE"
                  ),
                };
              }
            } catch (error) {
              console.error(
                `Error fetching carousel children for ${item.id}:`,
                error
              );
            }
          }
          return item;
        })
      );

      return enrichedMedia;
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
      return [];
    }
  }

  async refreshAccessToken(): Promise<string> {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.accessToken}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }
}
