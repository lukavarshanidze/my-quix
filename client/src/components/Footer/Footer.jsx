import styles from "./footer.module.scss";

import logo from "../../assets/images/eco-logo.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg="4" className={`mb-4`} md='6'>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
              <div className={`text-white`}>
                <h1>Multimart</h1>
              </div>
            </div>
            <p className={`${styles.footer__text} mt-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates velit accusamus nostrum alias modi praesentium culpa
              corrupti provident suscipit distinctio?
            </p>
          </Col>

          <Col lg="3" md='3' className={`mb-4`}>
            <div className={styles.footer__quick_links}>
              <h4 className={styles.quick__links_title}>Top Categories</h4>
              <ListGroup className={`mb-3`}>
                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md='3' className={`mb-4`}>
            <div className={styles.footer__quick_links}>
              <h4 className={styles.quick__links_title}>Useful Links</h4>
              <ListGroup className={`mb-3`}>
                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/login">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0`}>
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md='4'>
            <div className={styles.footer__quick_links}>
              <h4 className={styles.quick__links_title}>Contact</h4>
              <ListGroup className={`mb-3`}>
                <ListGroupItem className={`ps-0 border-0 d-flex align-items-center gap-2`}>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123 ZindaBazar, Sylhet, Bangladesh</p>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0 d-flex align-items-center gap-2`}>
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+08812312535235910</p>
                </ListGroupItem>

                <ListGroupItem className={`ps-0 border-0 d-flex align-items-center gap-2`}>
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>example123@gmail.com</p>
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
