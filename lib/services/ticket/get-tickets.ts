import { Concert, SearchFilters } from "@/lib/types";

// Mock data for concerts
export const mockConcerts: Concert[] = [
  {
    id: "1",
    title: "Summer Pop Blast",
    singer: "Ariana Grande",
    date: "2026-07-15T19:00:00Z",
    location: "Madison Square Garden, NY",
    price: 150,
    image: "/concerts/photo-1540039155733-5bb30b53aa14.jpeg",
    description: "Experience the vocal powerhouse live in NYC!",
    tags: ["Pop", "Live", "Summer"],
  },
  {
    id: "2",
    title: "Midnight Resonance",
    singer: "The Weeknd",
    date: "2026-08-02T20:00:00Z",
    location: "SoFi Stadium, CA",
    price: 180,
    image: "/concerts/photo-1501386761578-eac5c94b800a.jpeg",
    description: "A night of cinematic R&B and synth-pop.",
    tags: ["R&B", "Electronic", "Sultry"],
  },
  {
    id: "3",
    title: "Acoustic Soul",
    singer: "Ed Sheeran",
    date: "2026-06-20T18:30:00Z",
    location: "Soldier Field, IL",
    price: 120,
    image: "/concerts/andre-benz-Jb7TLs6fW_I-unsplash.jpg",
    description: "Intimate acoustic performance under the stars.",
    tags: ["Acoustic", "Pop", "Soul"],
  },
  {
    id: "4",
    title: "Acoustic Soul",
    singer: "Beyonce",
    date: "2026-06-20T18:30:00Z",
    location: "Soldier Field, IL",
    price: 125,
    image: "/concerts/rachel-coyne-U7HLzMO4SIY-unsplash.jpg",
    description: "Intimate acoustic performance under the stars.",
    tags: ["Acoustic", "Pop", "Soul"],
  },
  {
    id: "5",
    title: "Acoustic Soul",
    singer: "Charlie Puth",
    date: "2026-06-20T18:30:00Z",
    location: "Soldier Field, IL",
    price: 126,
    image: "/concerts/danny-howe-bn-D2bCvpik-unsplash.jpg",
    description: "Intimate acoustic performance under the stars.",
    tags: ["Acoustic", "Pop", "Soul"],
  },
];

export async function getConcerts(filters?: SearchFilters): Promise<Concert[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filtered = [...mockConcerts];

  if (filters?.query) {
    const query = filters.query.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.singer.toLowerCase().includes(query) ||
        c.location.toLowerCase().includes(query),
    );
  }

  if (filters?.date) {
    const filterDate = new Date(filters.date).toDateString();
    filtered = filtered.filter(
      (c) => new Date(c.date).toDateString() === filterDate,
    );
  }

  return filtered;
}
