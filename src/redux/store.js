import { configureStore } from '@reduxjs/toolkit';
import suggestionReducer from './suggestionReducer.js';
import detailsReducer from './detailsReducer.js';

const store = configureStore({
  reducer: {
    suggestions: suggestionReducer,
    details: detailsReducer
  },
});

export default store;
