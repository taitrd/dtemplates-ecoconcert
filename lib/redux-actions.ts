import { AppDispatch } from '@/lib/store';
import { setConcerts, setLoading, setError, setUserTickets } from '@/lib/tickets-slice';
import { fetchConcertsAction, checkoutAction } from '@/lib/actions/ticket';
import { SearchFilters } from '@/lib/types/ticket';

export const fetchConcerts = (filters?: SearchFilters) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const concerts = await fetchConcertsAction(filters);
    dispatch(setConcerts(concerts));
    dispatch(setError(null));
  } catch (error: any) {
    dispatch(setError(error.message || 'Failed to fetch concerts'));
  } finally {
    dispatch(setLoading(false));
  }
};

export const purchaseTicket = (concertId: string, userId: string, seatNumber: string) => async (dispatch: AppDispatch, getState: any) => {
  dispatch(setLoading(true));
  try {
    const ticket = await checkoutAction(concertId, userId, seatNumber);
    const currentTickets = getState().tickets.userTickets;
    dispatch(setUserTickets([...currentTickets, ticket]));
    dispatch(setError(null));
    return ticket;
  } catch (error: any) {
    dispatch(setError(error.message || 'Checkout failed'));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};
