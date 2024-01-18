import React from "react";
import styles from "../styles/about-us.module.scss";
import Helmet from "../components/Helmet/Helmet";

const About = () => {
  return (
    <Helmet title="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Quixfye Store</h1>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.paragraph}>
            Welcome to Quixfye Store, where we strive to provide you with
            high-quality digital products and exceptional customer service. Our
            mission is to make your online shopping experience seamless and
            enjoyable.
          </p>

          <p className={styles.paragraph}>
            At Quixfye Store, we understand the importance of reliable and
            timely delivery of digital products. Whether you're purchasing
            software, e-books, or any other digital item, we are committed to
            ensuring that you receive your products promptly.
          </p>

          <p className={styles.paragraph}>
            Our team is dedicated to maintaining the highest standards of
            excellence in every aspect of our business. We value transparency,
            integrity, and customer satisfaction above all else.
          </p>

          <p className={styles.paragraph}>
            Thank you for choosing Quixfye Store for your digital product needs.
            We look forward to serving you and providing you with a fantastic
            online shopping experience.
          </p>
        </div>

        <div className={styles.footer}>
          &copy; 2024 Quixfye Store. All rights reserved.
        </div>
      </div>
    </Helmet>
  );
};

export default About;
