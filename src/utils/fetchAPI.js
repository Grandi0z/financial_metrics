import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const key = 'a7bdf39e8d91e9da68c667e23ecc6127';
const link = 'https://financialmodelingprep.com/api/v3';

const fetchCompaniesSymbols = createAsyncThunk('companiesSymbols/fetchCompaniesSymbols',
  async (thunkAPI) => {
    const url = `${link}/financial-statement-symbol-lists?apikey=${key}`;
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const fetchCompaniesProfiles = createAsyncThunk('companiesProfiles/fetchCompaniesProfiles',
  async (symbol, thunkAPI) => {
    const url = `${link}/profile/${symbol}?apikey=${key}`;
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const fetchCompanyDetails = createAsyncThunk('companiesDetails/fetchCompanyDetails',
  async (symbol, thunkAPI) => {
    const url = `${link}/income-statement/${symbol}?limit=120&apikey=${key}`;
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export { fetchCompaniesProfiles, fetchCompaniesSymbols, fetchCompanyDetails };
