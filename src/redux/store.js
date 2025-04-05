import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filteredSlice";

export const store = configureStore({
  reducer: {
    contactsItems: contactsReducer,
    filters: filtersReducer,
  },
});
