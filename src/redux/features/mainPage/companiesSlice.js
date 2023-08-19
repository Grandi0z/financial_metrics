import { createSlice } from '@reduxjs/toolkit';
import { fetchCompaniesSymbols, fetchCompaniesProfiles } from '../../../utils/fetchAPI';

const name = 'companies';
const initialState = {
  companiesSymbols: ['A', 'A17U.SI', 'AMZN', 'MSFT', 'WMT', 'JPM',
    'V', 'DIS', 'NKE', 'MCD', 'KO', 'PEP', 'NFLX',
    'TSLA', 'UBER', 'TWTR', 'FB', 'BAC', 'GE',
    'IBM', 'BA', 'GOOG', 'NVDA', 'INTC', 'AMD', 'CRM',
    'ADBE', 'ORCL', 'CSCO', 'HPQ', 'JNJ', 'MRK', 'PFE',
    'UNH', 'HD', 'LOW', 'COST', 'WBA', 'CVS', 'CMCSA ',
    'SIRI', 'SPOT', 'VIAC'],
  companiesProfiles: [],
  isLoading: false,
  error: '',
  isFetching: true,
  fetchingProfile: true,
};

const companiesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCompaniesSymbols.pending, (state) => {
        state.isLoading = true;
        state.isFetching = true;
      })
      .addCase(fetchCompaniesSymbols.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFetching = false;
        state.companiesSymbols = action.payload;
      })
      .addCase(fetchCompaniesSymbols.rejected, (state, action) => {
        state.isLoading = false;
        state.isFetching = true;
        state.error = action.payload;
      })
      .addCase(fetchCompaniesProfiles.pending, (state) => {
        state.isLoading = true;
        state.fetchingProfile = true;
      })
      .addCase(fetchCompaniesProfiles.fulfilled, (state, action) => {
        state.isLoading = false;
        const company = action.payload;
        const newProfiles = [...state.companiesProfiles, company[0]];
        state.fetchingProfile = false;
        state.companiesProfiles = newProfiles;
      })
      .addCase(fetchCompaniesProfiles.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchingProfile = true;
        state.error = action.payload;
      });
  },
});

// contains the symbols of all companies
export const arrCompaniesSymbols = (store) => store.companies.companiesSymbols;
// contains all companies profiles
export const arrCompaniesProfiles = (store) => store.companies.companiesProfiles;

export default companiesSlice.reducer;
// export const {} = companiesSlice.actions;
