import { XMLParser } from "fast-xml-parser";

export interface LetterboxdEntry {
  title: string;
  filmTitle: string;
  filmYear: string;
  rating: number;
  watchedDate: string;
  posterUrl: string | null;
  link: string;
  rewatch: boolean;
}

const FEED_URL = "https://letterboxd.com/asimha/rss/";

function extractPoster(description: string): string | null {
  const match = description.match(/src="([^"]+)"/);
  return match ? match[1] : null;
}

function parseStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return "★".repeat(full) + (half ? "½" : "");
}

async function fetchFeed(): Promise<LetterboxdEntry[]> {
  const res = await fetch(FEED_URL);
  if (!res.ok) return [];

  const xml = await res.text();
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  });
  const parsed = parser.parse(xml);
  const items = parsed?.rss?.channel?.item;
  if (!items) return [];

  const list = Array.isArray(items) ? items : [items];

  return list
    .filter((item: any) => item["letterboxd:memberRating"] != null)
    .map((item: any) => ({
      title: item.title ?? "",
      filmTitle: item["letterboxd:filmTitle"] ?? "",
      filmYear: item["letterboxd:filmYear"] ?? "",
      rating: parseFloat(item["letterboxd:memberRating"]) || 0,
      watchedDate: item["letterboxd:watchedDate"] ?? "",
      posterUrl: extractPoster(item.description ?? ""),
      link: item.link ?? "",
      rewatch: item["letterboxd:rewatch"] === "Yes",
    }));
}

export async function getRecentRatings(count: number): Promise<LetterboxdEntry[]> {
  const entries = await fetchFeed();
  return entries.slice(0, count);
}

export async function getTopRated(minRating: number, count: number): Promise<LetterboxdEntry[]> {
  const entries = await fetchFeed();
  return entries.filter((e) => e.rating >= minRating).slice(0, count);
}

export { parseStars };
