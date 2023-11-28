import React from "react";
import { Container } from "reactstrap";
import styles from '../../styles/common-section.module.scss'

const CommonSelection = ({ title }) => {
  return (
    <section className={styles.common__section}>
      <Container className={`text-center`}>
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSelection;
