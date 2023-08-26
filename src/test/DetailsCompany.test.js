import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import {
  MemoryRouter, Route, Routes,
} from 'react-router-dom';
import DetailsCompany from '../components/DetailsCompany';
import companiesReducer from '../redux/features/mainPage/companiesSlice';
import companyDetailsReducer from '../redux/features/companyDetails/companyDetailsSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    companyDetails: companyDetailsReducer,
  },
});

describe('Main Page', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details']}>
          <Routes>
            <Route
              path="/details"
              element={(
                <DetailsCompany
                  profile={{
                    companyName: 'company',
                    fullTimeEmployees: '4',
                    image: 'image.jpg',
                  }}
                />
)}
            />
          </Routes>
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
