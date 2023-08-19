import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCompanyDetails } from '../utils/fetchAPI';
import { objCompanyDetails } from '../redux/features/companyDetails/companyDetailsSlice';
import DetailsCompany from './DetailsCompany';

const Filter = () => {
  const location = useLocation();
  const { symbol } = location.state.profile;
  const { profile } = location.state;
  const dispatch = useDispatch();
  const {
    detailsAreLoading,
    detailsError,
    detailsAreFetching,
  } = useSelector(((store) => store.companyDetails));
  const company = useSelector(objCompanyDetails);

  useEffect(() => {
    if (symbol) {
      dispatch(fetchCompanyDetails(symbol));
    }
    return () => {
      dispatch(fetchCompanyDetails());
    };
  }, [dispatch, symbol]);

  let content;
  if (detailsAreLoading) {
    content = <div className="loadingData">Is loading...</div>;
  } else if (detailsError) {
    content = <div className="errorMessage">Something went wrong</div>;
  } else if (!detailsAreFetching && company) {
    content = <DetailsCompany company={company} profile={profile} />;
  } else {
    content = <div>Data are fetching...</div>;
  }

  return (
    <>{content}</>
  );
};

export default Filter;
