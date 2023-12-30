import { Container, Row } from "reactstrap";
import userIcon from "../assets/images/user-icon.png";
import styles from "../styles/admin-nav.module.scss";

import { NavLink } from "react-router-dom";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  return (
    <>
      <header className={`${styles.admin__header}`}>
        <div className={`${styles.admin__nav_top}`}>
          <Container>
            <div className={`${styles.admin__nav_wrapper}`}>
              <div className={`${styles.logo}`}>
                <h2>Quixfye</h2>
              </div>

              <div className={`${styles.search__box}`}>
                <input type="text" placeholder="Search...." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className={`${styles.admin__nav_topright}`}>
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={userIcon} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className={`${styles.admin__menu} p-0`}>
        <Container>
          <Row>
            <div className={`${styles.admin__navigation}`}>
              <ul className={`${styles.admin__menu_list}`}>
                {admin__nav.map((item, index) => (
                  <li className={`${styles.admin__menu_item}`} key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? styles.active__admin_menu : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
