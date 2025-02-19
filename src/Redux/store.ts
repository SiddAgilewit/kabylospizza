import { configureStore } from '@reduxjs/toolkit';
import { First,LogInStatus } from './reducer';


export const store = configureStore({
  reducer: {
    counter: First,
    AuthenticationStatus:LogInStatus
  },
});



