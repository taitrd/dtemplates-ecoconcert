"use server";

import { getConcerts } from "@/lib/services/ticket/get-tickets";
import { checkout } from "@/lib/services/ticket/check-out";
import { SearchFilters, Concert, Ticket } from "@/lib/types";

export async function fetchConcertsAction(
  filters?: SearchFilters,
): Promise<Concert[]> {
  try {
    return await getConcerts(filters);
  } catch (error) {
    console.error("Failed to fetch concerts:", error);
    throw new Error("Failed to fetch concerts");
  }
}

export async function checkoutAction(
  concertId: string,
  userId: string,
  seatNumber: string,
): Promise<Ticket> {
  try {
    return await checkout(concertId, userId, seatNumber);
  } catch (error) {
    console.error("Checkout failed:", error);
    throw new Error("Checkout failed");
  }
}
