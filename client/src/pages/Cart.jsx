import styles from "../styles/cart.module.scss";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSelection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(
      cartActions.addItem({
        // id: item.id,
        // productName: item.productName,
        // price: item.price,
        // imgUrl: item.imgUrl,
      })
    );
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className={`fs-4 text-center`}>
                  No item added to the cart
                </h2>
              ) : (
                <table className={`table bordered ${styles.table}`}>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6
                  className={`d-flex align-items-center justify-content-between `}
                >
                  Subtotal
                  <span className={`fs-4 fw-bold`}>${parseFloat(totalAmount.toFixed(2))}</span>
                </h6>
                <p className={`fs-6 mt-2`}>
                  taxees and shipping will calculate in checkout
                </p>
                <div>
                  <Link to={"/checkout"}>
                    <button className={`${styles.buy__btn} w-100 `}>
                      Checkout
                    </button>
                  </Link>

                  <Link to={"/shop"}>
                    <button className={`${styles.buy__btn} w-100 mt-3`}>
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  const addToCart = (e) => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
  };

  const minusToCart = (e) => {
    dispatch(
      cartActions.minusItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
  };

  return (
    <tr className={styles.tr__container}>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td className={styles.buttons__td}>
        <button onClick={minusToCart}>-</button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button onClick={addToCart}>+</button>
      </td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
