import { useRef, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate()

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(styles.sticky__header);
      } else {
        headerRef.current.classList.remove(styles.sticky__header);
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () =>
    menuRef.current.classList.toggle(styles.active__menu);

    const navigateToCart = () => {
      navigate('/cart')
    }
  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <Row>
          <div className={styles.nav__wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div
              className={styles.navigation}
              ref={menuRef}
              onClick={menuToggle}
            >
              <ul className={styles.menu}>
                {nav__links.map((item, index) => (
                  <li className={styles.nav__item} key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? styles.nav__active : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.nav__icons}>
              <span className={styles.fav__icon}>
                <i class="ri-heart-line"></i>
                <span className={styles.badge}>1</span>
              </span>
              <span className={styles.cart__icon} onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className={styles.badge}>{totalQuantity}</span>
              </span>

              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
              <div className={styles.mobile__menu}>
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;