import { Container, Row, Col } from "reactstrap";
import userIcon from "../assets/images/user-icon.png";
import styles from '../styles/admin-nav.module.scss'

const AdminNav = () => {
  return (
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
                <i class="ri-search-line"></i>
              </span>
            </div>
            <div className={`${styles.admin__nav_topright}`}>
              <span>
                <i class="ri-notification-3-line"></i>
              </span>
              <span>
                <i class="ri-settings-2-line"></i>
              </span>
              <img src={userIcon} alt=""/>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default AdminNav;
