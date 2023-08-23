import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Company from './Company';
import styles from '../styles/company.module.css';

const CompaniesList = (props) => {
  const { companies } = props;

  const listItems = companies.map((company) => (
    <li key={uuidv4()} className={styles.liCompany}>
      <NavLink
        to="/details"
        state={{ profile: company }}
        style={{ textDecoration: 'none' }}
      >
        <Company company={company} />
      </NavLink>
    </li>
  ));
  return (
    <Container style={{ padding: 0 }}>
      <h2 className="bigTitle">COMPANIES BY NAME</h2>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Link className="source" to="https://financialmodelingprep.com/developer/docs/">
        Data provided by Financial Modeling Prep
      </Link>
      <ul className={styles.ulCompanies}>
        {listItems}
      </ul>
    </Container>
  );
};

CompaniesList.propTypes = {
  companies: PropTypes.shape().isRequired,
};

export default CompaniesList;
