import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import styles from "./services.module.scss";

import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className={styles.services}>
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div whileHover={{scale: 1.1}} className={styles.service__item} style={{background: `${item.bg}`}}>
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
