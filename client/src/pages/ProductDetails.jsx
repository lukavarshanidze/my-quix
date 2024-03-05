import { useState, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSelection";
import styles from "../styles/product-details.module.scss";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

import firstImage from "../assets/cleanerImages/air.webp";
import secondImage from "../assets/cleanerImages/second.webp";
import thirdImage from "../assets/cleanerImages/third.webp";
import fourthImage from "../assets/cleanerImages/fourth.webp";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false); // State to track transition

  const { id } = useParams();
  const params = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    toast.success("Review submitted");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const images = [
    product.imgUrl,
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
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className={`pt-0`}>
        <Container lg="12" className={styles.container}>
          <Row>
            <Col className={styles.image_container} lg="6">
              <button
                className={`${styles.prev} ${
                  currentIndex === 0 ? styles.prevButton_zero : ""
                }`}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              {images
                .slice(currentIndex, currentIndex + numImagesPerPage)
                .map((image, index) => (
                  <img
                    key={index}
                    whileHover={{ scale: 0.9 }}
                    src={image}
                    alt=""
                  />
                ))}
              <button
                className={`${styles.next} ${
                  currentIndex === numImages - 1 ? styles.nextButton_last : ""
                }`}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </Col>

            <Col className={styles.short_cont} lg="5">
              <div className={`${styles.product__details}`}>
                <h2>{product.productName}</h2>
                <div
                  className={`${styles.product__rating} d-flex align-items-center gap-5 mb-3`}
                >
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-start-half-s-line"></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <div className={`d-flex align-items-center gap-4`}>
                  <span className={`${styles.product__price}`}>${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className={` mt-3`}>{shortDesc}</p>

                <motion.button
                  onClick={addToCart}
                  whileTap={{ scale: 1.2 }}
                  className={styles.buy__btn}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div
                className={`${styles.tab__wrapper} d-flex align-items-center gap-5`}
              >
                <h6
                  className={`${tab === "desc" ? styles.active__tab : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? styles.active__tab : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className={`${styles.tab__content} mt-5`}>
                  <p>{description}</p>
                </div>
              ) : (
                <div className={`${styles.product__review} mt-5`}>
                  <div className={`${styles.review__wrapper}`}>
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className={`mb-4`}>
                          <h6>John Doe</h6>
                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className={`${styles.review__form}`}>
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className={`${styles.form__group}`}>
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div
                          className={`${styles.form__group} ${styles.rating__group} d-flex align-items-center gap-5 `}
                        >
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i className="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className={`${styles.form__group}`}>
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className={`${styles.buy__btn}`}
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className={`mt-5`}>
              <h2 className={`${styles.related__title}`}>You migh also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
