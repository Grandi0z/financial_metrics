import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styles from '../styles/details.module.css';
import {
  splitTitle,
  splitDate,
  capitalizeAndSpace,
  filterMetricsValues,
  setBackGround,
} from '../utils/filtersFunctions';
import {
  myBackground1,
  myBackground2,
  companyTitleBackground,
} from '../utils/customizedObject';

const DetailsCompany = (props) => {
  const { company, profile } = props;
  const { companyName, fullTimeEmployees, image } = profile;

  let backgroundCheck = false;

  const titleGroung = setBackGround(companyTitleBackground, image);
  // take the key (property) of company
  let properties;
  // contain only metrics values remove string values
  let newCompany;
  if (company) {
    newCompany = filterMetricsValues(company);
    properties = Object.keys(newCompany);
  }

  return (
    <Container style={{ padding: 0 }}>
      {newCompany && (
        <>
          <div className="bar">
            <div>
              <Link to="/">
                <i className="bi bi-chevron-left" />
              </Link>
            </div>
            <span>Details</span>
            <div className="navLinks">
              <Link href="/#">
                <i className="bi bi-mic-fill" />
              </Link>
              <Link href="/#">
                <i className="bi bi-gear-wide" />
              </Link>
            </div>
          </div>
          <header className="companyTitle" style={titleGroung}>
            <h2 className={styles.titleDetails}>
              {companyName}
              <span className={styles.employees}>
                {fullTimeEmployees}
                {' '}
                Employees
              </span>
            </h2>
            <h4 className={styles.subTitleDetails}>
              {splitTitle(companyName)}
              &apos;s metrics -
              {' '}
              {splitDate(company.date)}
            </h4>
          </header>
          <ul className={styles.ulDetails}>
            {properties.map((property) => {
              backgroundCheck = !backgroundCheck;
              return (
                <Card key={uuidv4()} className="card">
                  <Card.Body
                    style={backgroundCheck ? myBackground1 : myBackground2}
                    className={styles.liDetails}
                  >
                    <span>{capitalizeAndSpace(property)}</span>
                    <span className={styles.propertyValue}>
                      {' '}
                      {newCompany[property]}
                    </span>
                    <Card.Link href="#" className={styles.cardLink}>
                      <i className="bi bi-arrow-right-circle" />
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </ul>
        </>
      )}
    </Container>
  );
};

DetailsCompany.propTypes = {
  company: PropTypes.shape(PropTypes.string).isRequired,
  profile: PropTypes.shape(PropTypes.string).isRequired,
};

export default DetailsCompany;
