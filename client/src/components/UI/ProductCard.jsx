import { motion } from "framer-motion";
import styles from "../../styles/product-card.module.scss";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { useState } from "react";

import firstImage from "../../assets/cleanerImages/air.webp";
import secondImage from "../../assets/cleanerImages/second.webp";
import thirdImage from "../../assets/cleanerImages/third.webp";
import fourthImage from "../../assets/cleanerImages/fourth.webp";

const ProductCard = ({ item }) => {
  const [addingToCart, setAddingToCart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
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

  const images = [
    item.imgUrl,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  ];
  const numImages = images.length;
  const numImagesPerPage = 1;

  const nextSlide = () => {
    setTransitioning(true); // Start transition
    setTimeout(() => {
      const newIndex = (currentIndex + numImagesPerPage) % numImages;
      setCurrentIndex(newIndex);
    }, 0); // Change image after 1 second (adjust as needed)
  };

  const prevSlide = () => {
    setTransitioning(true); // Start transition
    setTimeout(() => {
      const newIndex =
        (currentIndex - numImagesPerPage + numImages) % numImages;
      setCurrentIndex(newIndex);
    }, 0); // Change image after 1 second (adjust as needed)
  };

  return (
    <Col lg="4" md="5" className="mb-2">
      <div className={styles.product__item}>
        <div className={styles.product__img}>
          <div className={styles.image_container}>
            <button
              className={`${styles.prev} ${
                currentIndex === 0 ? styles.prevButton_zero : ""
              }`}
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <Link to={`/shop/${item.id}`}>
              {images
                .slice(currentIndex, currentIndex + numImagesPerPage)
                .map((image, index) => (
                  <motion.img
                    key={index}
                    whileHover={{ scale: 0.9 }}
                    src={image}
                    alt=""
                  />
                ))}
            </Link>

            <button
              className={`${styles.next} ${
                currentIndex === numImages - 1 ? styles.nextButton_last : ""
              }`}
              onClick={nextSlide}
            >
              &#10095;
            </button>
          </div>
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
