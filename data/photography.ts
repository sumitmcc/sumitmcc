import { InstagramMedia, Photo } from "../lib/types";

// Transform Instagram data to our Photo interface
export function transformInstagramMedia(media: InstagramMedia[]): Photo[] {
  return media.map((item) => {
    const basePhoto: Photo = {
      id: item.id,
      url: item.media_url,
      thumbnailUrl: item.media_url,
      caption: item.caption,
      timestamp: item.timestamp,
      permalink: item.permalink,
      tags: extractHashtags(item.caption || ""),
      alt_text: item.alt_text,
      media_type: item.media_type,
    };

    // Handle carousel albums
    if (item.media_type === "CAROUSEL_ALBUM" && item.children) {
      basePhoto.carousel_media = item.children.map((child) => ({
        id: child.id,
        url: child.media_url,
        thumbnailUrl: child.media_url,
        caption: item.caption, // Use parent caption
        timestamp: item.timestamp,
        permalink: item.permalink,
        tags: extractHashtags(item.caption || ""),
        alt_text: item.alt_text,
        media_type: child.media_type,
      }));
    }

    return basePhoto;
  });
}

function extractHashtags(caption: string): string[] {
  const hashtags = caption.match(/#[\w]+/g);
  return hashtags ? hashtags.map((tag) => tag.slice(1).toLowerCase()) : [];
}
