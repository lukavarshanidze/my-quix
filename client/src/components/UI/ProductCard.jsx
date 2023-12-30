import { motion } from "framer-motion";
import styles from "../../styles/product-card.module.scss";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const [addingToCart, setAddingToCart] = useState(false);
  const dispatch = useDispatch();

  const addToCart = (e) => {
    const x = e.pageX;
    const y = e.pageY;

    setAddingToCart(true);
    setTimeout(() => {
      setAddingToCart(false);
    }, 1000);

    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className={styles.product__item}>
        <div className={styles.product__img}>
          <Link to={`/shop/${item.id}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </Link>
        </div>
        <div className={`${styles.product__info} p-2`}>
          <h3 className={styles.product__name}>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div
          className={`${styles.product__card_button} d-flex align-items-center justify-content-between p-2`}
        >
          <span className={styles.price}>${item.price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            onClick={(e) => addToCart(e)}
            className={addingToCart ? styles.adding_to_cart : ""}
          >
            {addingToCart ? <img src={item.imgUrl} /> : ""}
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
