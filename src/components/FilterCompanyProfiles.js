import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { arrCompaniesSymbols, arrCompaniesProfiles } from '../redux/features/mainPage/companiesSlice';
import { fetchCompaniesProfiles } from '../utils/fetchAPI';

import CompaniesList from './CompaniesList';
import { randomArray } from '../utils/filtersFunctions';

const FilterCompanyProfiles = () => {
  const {
    isLoading, error, fetchingProfile,
  } = useSelector((store) => store.companies);
  const companiesSymbols = useSelector(arrCompaniesSymbols);
  const dispatch = useDispatch();
  const companies = useSelector(arrCompaniesProfiles);
  // control the useEffect
  let run = true;
  if (companies.length >= companiesSymbols.length) {
    run = false;
  }
  useEffect(() => {
    if (run) {
      const symbols = randomArray(companiesSymbols, companiesSymbols.length - 33);
      symbols.map((symbol) => dispatch(fetchCompaniesProfiles(symbol)));
    }
    return () => {
      dispatch(fetchCompaniesProfiles());
    };
  }, [dispatch, companiesSymbols, run]);

  let content;
  if (isLoading) {
    content = <div className="loadingData">Is loading...</div>;
  } else if (error) {
    content = <div className="errorMessage">Something went wrong</div>;
  } else if (!fetchingProfile && companies.length >= companiesSymbols.length) {
    content = <CompaniesList companies={companies} />;
  } else {
    content = <div>Data are fetching...</div>;
  }

  return (
    <>{content}</>
  );
};

export default FilterCompanyProfiles;
