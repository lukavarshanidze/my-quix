import { useRef, useEffect } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";

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
  {
    path: "about-us",
    display: "About",
  },
  {
    path: 'contact',
    display: "Contact"
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const currentUser = localStorage.getItem("currentUser");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const currentUser = useSelector((state) => state.cart.currentUser);
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate("/cart");
  };

  const toggleProfileActions = () => {
    const isProfileActionsVisible = profileActionRef.current.classList.toggle(
      styles.profile__actions
    );
    return isProfileActionsVisible;
  };

  const LogoutHandler = async () => {
    try {
      const response = await axios.post("/auth/logout", {
        headers: {
          Authorization: currentUser,
        },
      });
      if (response.data.success) {
        dispatch(
          cartActions.setCurrentUser({
            token: null,
            userName: null,
          })
        );
        localStorage.removeItem("currentUser");
        toast.success("Logged out", {
          autoClose: 1000,
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  // console.log("cr", currentUser);
  // console.log("crrrrrrr", localStorage.getItem("currentUser"));
  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <Row>
          <div className={styles.nav__wrapper}>
            <Link to="/home">
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <div>
                  <h1>Quixfye</h1>
                </div>
              </div>
            </Link>
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
              <span className={styles.cart__icon} onClick={navigateToCart}>
                <i style={{ fontSize: "16px" }}>Cart</i>
                <i className="ri-shopping-bag-line"></i>
                <span style={{ fontSize: "12px" }} className={styles.badge}>
                  {totalQuantity}
                </span>
              </span>

              <div className={`${styles.profile}`}>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt=""
                  onClick={toggleProfileActions}
                />

                {/* <p>{currentUser.userName}</p> */}
                <div
                  className={`${styles.show__profileActions}`}
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={LogoutHandler}>Logout</span>
                  ) : (
                    <div
                      className={`d-flex align-items-center justify-content-center flex-column`}
                    >
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                      {/* <Link to="/dashboard">Dashboard</Link> */}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.mobile__menu}>
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
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
