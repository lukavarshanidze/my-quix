import { useState, useEffect } from "react";
import styles from "../styles/home.module.scss";

import Helmet from "../components/Helmet/Helmet";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer-img.png";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();
  const data = localStorage.getItem("cart");

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    

    const filteredBestSaslesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredCleanerProducts = products.filter(
      (item) => item.category === "vacuum cleaner"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredCleanerProducts);
    setBestSalesProducts(filteredBestSaslesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className={styles.hero__section}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={styles.hero__content}>
                <p className={styles.hero__subtitle}>
                  Trending product in {year}
                </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Explore our curated collection, featuring chic furniture and
                  decor. Transform your space effortlessly with modern
                  essentials for a sophisticated and stylish home.
                </p>
                <Link to={"/shop"}>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className={styles.buy__btn}
                  >
                    SHOP NOW
                  </motion.button>
                </Link>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className={styles.hero__img}>
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className={styles.trending__products}>
        <Container>
          <Row>
            <Col lg="12" className={styles.text_center}>
              <h2 className={styles.section__title}>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className={styles.best__sales}>
        <Container>
          <Row>
            <Col lg="12" className={styles.text_center}>
              <h2 className={styles.section__title}>Best Sales</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className={styles.timer__count}>
        <Container>
          <Row>
            <Col lg="6" md="12" className={`${styles.count__down_col}`}>
              <div className={styles.clock__top_content}>
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className={`${styles.buy__btn} ${styles.store__btn}`}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className={`text-end ${styles.counter__img}`}>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.new__arrivals}>
        <Container>
          <Row>
            <Col lg="12" className={`${styles.text_center} mb-5`}>
              <h2 className={styles.section__title}>New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className={styles.popular__category}>
        <Container>
          <Row>
            <Col lg="12" className={`${styles.text_center} mb-5`}>
              <h2 className={styles.section__title}>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
