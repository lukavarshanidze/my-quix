import styles from "../styles/product-details.module.scss";
import { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl: enterProductImg,
    // };
  
    const formData = new FormData();
    formData.append("title", enterTitle);
    formData.append("shortDesc", enterShortDesc);
    formData.append("description", enterDescription);
    formData.append("category", enterCategory);
    formData.append("image", enterProductImg);
    formData.append("price", enterPrice);
    console.log(formData);

    try {
      const response = await axios.post("api/admin/add-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);
      toast.success("product successfully added!", {
        autoClose: 2000,
      });
      navigate("/dashboard/all-products");
    } catch (error) {
      setLoading(false);
      toast.error("there is error adding product");
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className={`py-5`}>Loading......</h4>
            ) : (
              <>
                <h4>Add Product</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className={`${styles.form__group}`}>
                    <span className={`mb-5`}>Product title</span>
                    <input
                      type="text"
                      placeholder="Double sofa"
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className={`${styles.form__group}`}>
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="lorem......"
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className={`${styles.form__group}`}>
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description"
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <div
                    className={`d-flex align-items-center justify-content-between gap-5`}
                  >
                    <FormGroup className={`${styles.form__group} w-50`}>
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="$100"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className={`${styles.form__group} w-50`}>
                      <span>Category</span>
                      <select
                        className={`w-100 p-2`}
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                        required
                      >
                        <option value="chair">Chair</option>
                        <option value="vacuum cleaner">Cleaner</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className={`${styles.form__group}`}>
                      <span>Product Image</span>
                      <input
                        type="file"
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
                      />
                    </FormGroup>
                  </div>

                  <button className={`${styles.buy__btn}`} type="submit">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
