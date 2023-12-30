import styles from "../styles/login.module.scss";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put("auth/signup", {
        email,
        password,
        name: username,
      });
      const data = response.data;
      setLoading(false);
      toast.success("Account created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message, {
        autoClose: 4000,
      });
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className={`text-center`}>
                <h5 className={`fw-bold`}>Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className={`m-auto text-center`}>
                <h3 className={`fw-bold mb-4`}>Signup</h3>

                <Form
                  className={`${styles.auth__form}`}
                  onSubmit={onSubmitHandler}
                >
                  <FormGroup className={`${styles.form__group}`}>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className={`${styles.form__group}`}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className={`${styles.form__group}`}>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button
                    type="submit"
                    className={`${styles.buy__btn} ${styles.auth__btn}`}
                  >
                    Create an Account
                  </button>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
