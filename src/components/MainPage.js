import React from 'react';
import { Link } from 'react-router-dom';
import FilterCompanyProfiles from './FilterCompanyProfiles';

const MainPage = () => (
  <>
    <div className="region">
      <div className="bar">
        <div>
          <Link to="/"><i className="bi bi-chevron-left" /></Link>
          <span>{new Date().getFullYear()}</span>
        </div>
        <span>most Companies</span>
        <div className="navLinks">
          <Link href="/#"><i className="bi bi-mic-fill" /></Link>
          <Link href="/#"><i className="bi bi-gear-wide" /></Link>
        </div>
      </div>
      <h1 className="country">42 USA&apos;S COMPANIES</h1>
    </div>
    <FilterCompanyProfiles />
  </>
);

export default MainPage;
