import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/company.module.css';
import { setBackGround } from '../utils/filtersFunctions';
import { myStyle } from '../utils/customizedObject';

const Company = (props) => {
  const { company } = props;
  return (
    company

    && (
    <Card className={styles.card}>
      <Card.Body style={setBackGround(myStyle, company.image)} className={styles.cardBody}>
        <Card.Link href="#" className={styles.cardLink}><i className="bi bi-arrow-right-circle" /></Card.Link>
        <Card.Title className={styles.cardTitle}>{company.companyName}</Card.Title>
        <Card.Subtitle className={styles.cardSubTitle}>
          {company.industry}
        </Card.Subtitle>
      </Card.Body>
    </Card>
    )

  );
};
Company.propTypes = {
  company: PropTypes.shape(
    {
      image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      companyName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      industry: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    },
  ).isRequired,
};

export default Company;
