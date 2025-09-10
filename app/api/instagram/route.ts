// app/api/instagram/route.ts
import { NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      return NextResponse.json(
        { error: 'Instagram credentials not configured' },
        { status: 500 }
      );
    }

    const instagram = new InstagramAPI(accessToken, userId);
    const media = await instagram.getUserMedia(50);

    return NextResponse.json(
      { photos: media },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      }
    );
  } catch (error) {
    console.error('Instagram API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram photos' },
      { status: 500 }
    );
  }
}