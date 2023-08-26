import { createSlice } from '@reduxjs/toolkit';
import { fetchCompanyDetails } from '../../../utils/fetchAPI';

const name = 'companyDetails';
const initialState = {
  companyDetails: [],
  detailsAreLoading: false,
  detailsError: '',
  detailsAreFetching: true,
};

const companyDetailsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCompanyDetails.pending, (state) => {
        state.detailsAreLoading = true;
        state.detailsAreFetching = true;
      })
      .addCase(fetchCompanyDetails.fulfilled, (state, action) => {
        state.detailsAreLoading = false;
        state.detailsAreFetching = false;
        const company = action.payload;
        [state.companyDetails] = company;
      })
      .addCase(fetchCompanyDetails.rejected, (state, action) => {
        state.detailsAreLoading = false;
        state.detailsAreFetching = true;
        state.detailsError = action.payload;
      });
  },
});

export const objCompanyDetails = (store) => store.companyDetails.companyDetails;
export default companyDetailsSlice.reducer;
