import { configureStore } from '@reduxjs/toolkit';
import { First } from './reducer';


export const store = configureStore({
  reducer: {
    counter: First,
  },
});



