import styles from "../styles/checkout.module.scss";
import { useSelector } from "react-redux";

import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSelection from "../components/UI/CommonSelection";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSelection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className={`mb-4 fw-bold`}>Billing Information</h6>
              <Form className={`${styles.billing__form}`}>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup className={`${styles.form__group}`}>
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className={`${styles.form__group}`}>
                  <input type="tenumberxt" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Country" />
                </FormGroup>

                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className={`${styles.checkout__cart}`}>
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>

                <h6>Free shipping</h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button
                  className={`${styles.buy__btn} ${styles.auth__btn} w-100`}
                >
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
