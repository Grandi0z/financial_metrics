import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const key = '5332f3c13f9457e917e1098f3c882b81';
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
