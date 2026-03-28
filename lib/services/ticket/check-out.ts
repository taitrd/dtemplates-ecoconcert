import { Ticket } from '@/lib/types/ticket';

export async function checkout(concertId: string, userId: string, seatNumber: string): Promise<Ticket> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    id: Math.random().toString(36).substr(2, 9),
    concertId,
    userId,
    seatNumber,
    purchasedAt: new Date().toISOString(),
    status: 'active',
  };
}
