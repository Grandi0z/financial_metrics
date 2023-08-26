import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { arrCompaniesSymbols, arrCompaniesProfiles } from '../redux/features/mainPage/companiesSlice';
import { fetchCompaniesProfiles } from '../utils/fetchAPI';

import CompaniesList from './CompaniesList';
import { randomArray } from '../utils/filtersFunctions';

const FilterCompanyProfiles = () => {
  // set the number of companies which will be display which is 43 - count
  const count = 42;

  const {
    isLoading, error, fetchingProfile,
  } = useSelector((store) => store.companies);

  const companiesSymbols = useSelector(arrCompaniesSymbols);
  const dispatch = useDispatch();
  const companies = useSelector(arrCompaniesProfiles);
  // control the useEffect
  let run = true;
  if (companies.length >= (companiesSymbols.length - count)) {
    run = false;
  }
  // sometimes the Api sends empty company, so to avoid to use them, let's do a filter
  const trueCompanies = [];
  if (companies.length) {
    companies.forEach((company) => {
      if (typeof company !== 'undefined') {
        trueCompanies.push(company);
      }
    });
  }

  useEffect(() => {
    if (run) {
      const symbols = randomArray(companiesSymbols, companiesSymbols.length - count);
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
    // the condition should be !fetchingProfile && trueCompanies.length >= companiesSymbols.length
  } else if (!fetchingProfile
      && (trueCompanies.length >= companiesSymbols.length - count)
      && companiesSymbols.length) {
    content = <CompaniesList companiesEnt={trueCompanies} />;
  } else {
    content = <div>Data are fetching...</div>;
  }

  return (
    <>{content}</>
  );
};

export default FilterCompanyProfiles;
