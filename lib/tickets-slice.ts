import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Concert, Ticket, SearchFilters, TicketState } from '@/lib/types';

const initialState: TicketState = {
  concerts: [],
  userTickets: [],
  selectedConcertIds: [],
  filters: {
    query: '',
  },
  loading: false,
  error: null,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setConcerts(state, action: PayloadAction<Concert[]>) {
      state.concerts = action.payload;
    },
    setUserTickets(state, action: PayloadAction<Ticket[]>) {
      state.userTickets = action.payload;
    },
    toggleConcertSelection(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.selectedConcertIds.includes(id)) {
        state.selectedConcertIds = state.selectedConcertIds.filter(cid => cid !== id);
      } else {
        state.selectedConcertIds.push(id);
      }
    },
    clearSelection(state) {
      state.selectedConcertIds = [];
    },
    setFilters(state, action: PayloadAction<SearchFilters>) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setConcerts, setUserTickets, toggleConcertSelection, clearSelection, setFilters, setLoading, setError } = ticketsSlice.actions;
export default ticketsSlice.reducer;
