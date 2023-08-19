import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './features/mainPage/companiesSlice';
import companyDetailsReducer from './features/companyDetails/companyDetailsSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    companyDetails: companyDetailsReducer,
  },
});

export default store;
