import styles from "../styles/login.module.scss";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("auth/login", {
        email,
        password,
      });
      if (response.status === 401) {
        throw new Error("Validation failed.");
      }
      if (response.status !== 200) {
        throw new Error("Could not authenticate you!");
      }
      const data = response.data;
      // console.log('data',data);
      setLoading(false);
      toast.success("Successfully logged in");
      dispatch(
        cartActions.setCurrentUser({
          token: data.token,
          userName: data.username,
        })
      );
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      console.log('errr',error);
      toast.error(error.response.data.message, {
        autoClose: 3300,
      });
    }
  };
  // fetch("auth/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="123" className={`text-center`}>
                <h5 className={`fw-bold`}>Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className={`m-auto text-center`}>
                <h3 className={`fw-bold mb-4`}>Login</h3>

                <Form
                  onSubmit={onSubmitHandler}
                  className={`${styles.auth__form}`}
                >
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
                    Login
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signup">Create an account</Link>
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

export default Login;
