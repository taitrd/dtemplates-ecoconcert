import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './tickets-slice';
import authReducer from './auth-slice';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
