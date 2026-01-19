// lib/fetchVimeoVideos.ts
export interface VideoItem {
  url: string;
  aspectRatio: number;
}

export async function fetchVimeoVideos(): Promise<VideoItem[]> {
  const VIMEO_ACCESS_TOKEN = '4234e52f022e31aed512f96f770ac230' // process.env.VIMEO_ACCESS_TOKEN; 
  // const USER_ID = 'me' // process.env.VIMEO_USER_ID 

  if (!VIMEO_ACCESS_TOKEN) {
    throw new Error("VIMEO_ACCESS_TOKEN not set in env variables");
  }

  const url = new URL("https://api.vimeo.com/me/videos");
  url.searchParams.set("fields", "link,width,height,name,pictures.sizes");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
      Accept: "application/vnd.vimeo.*+json;version=3.4",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const bodyText = await response.text();
    throw new Error(`Vimeo API error ${response.status}: ${bodyText}`);
  }

  const data = await response.json();

  // Map Vimeo API to your VideoItem format
  const videos: VideoItem[] = data.data?.map((video: any) => {
    // Pick the best video file
    const width = video.width ?? 16;
    const height = video.height ?? 9;

    const thumb =
      video.pictures?.sizes?.[video.pictures.sizes.length - 1]?.link ?? undefined;

    const file = video.files?.find((f: any) => f.quality === "hd") || video.files?.[0];

    return {
      url: video.link,
      aspectRatio: width / height,
      title: video.name,
      thumbnail: thumb,
    };
  });

  return videos;
}
