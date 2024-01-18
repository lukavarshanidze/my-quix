import styles from "./footer.module.scss";

import logo from "../../assets/images/eco-logo.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.row}>
          <Col lg="4" className={`mb-4 `} md="6">
            <h1 className={` text-white d-flex justify-content-center`}>
              Quixfye
            </h1>
            <p className={`${styles.footer__text} mt-4`}>
              Discover a world of modern style at Quixfye. Find quality
              furniture, gadgets, and more to elevate your lifestyle.
            </p>
          </Col>

          <Col lg="3" md="3" className={`mb-4`}>
            <div className={styles.footer__quick_links}>
              <h4
                className={`${styles.quick__links_title} text-white d-flex justify-content-center`}
              >
                Top Categories
              </h4>
              <ListGroup className={`mb-3`}>
                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/shop-category/mobile">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/shop-category/sofa">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/shop-category/chair">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/shop-category/watch">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className={`mb-4`}>
            <div className={styles.footer__quick_links}>
              <h4
                className={`${styles.quick__links_title} text-white d-flex justify-content-center`}
              >
                Useful Links
              </h4>
              <ListGroup className={`mb-3`}>
                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/privacy">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className={styles.footer__quick_links}>
              <h4 className={styles.quick__links_title}>Contact</h4>
              <ListGroup className={`mb-3`}>
                <ListGroupItem
                  className={`ps-0 border-0 d-flex align-items-center gap-2`}
                >
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>Tbilisi, Georgia</p>
                </ListGroupItem>

                <ListGroupItem
                  className={`ps-0 border-0 d-flex align-items-center gap-2`}
                >
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+995555392221</p>
                </ListGroupItem>

                <ListGroupItem
                  className={`ps-0 border-0 d-flex align-items-center gap-2`}
                >
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>contact@quixfye.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className={styles.footer__copyright}>
              Copyright {year} developed by Luka Varshanidze. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
