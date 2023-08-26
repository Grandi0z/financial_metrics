import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { companies, setFilterCompanies } = props;
  const [value, setValue] = useState([]);
  const handleChange = (value) => {
    setValue(value);
    const result = companies.filter((company) => (
      value
                && company.companyName.toLowerCase().includes(value)
    ));
    setFilterCompanies(result);
  };
  // when the search bar lost the focus
  const handleFocus = (e) => {
    if (e.target.value === '') {
      setFilterCompanies(companies);
    }
  };
  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm"><i className="bi bi-search" /></InputGroup.Text>
      <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={(e) => handleFocus(e)}
      />
    </InputGroup>
  );
};

SearchBar.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setFilterCompanies: PropTypes.func.isRequired,
};

export default SearchBar;
