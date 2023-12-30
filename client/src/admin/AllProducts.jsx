import { Container, Row, Col } from "reactstrap";
import styles from "../styles/cart.module.scss";
import GetData from "../custom-hooks/GetData";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  // const { data, loading } = GetData()

  const GetData = async () => {
    // console.log(location);
    setLoading(true);
    try {
      const response = await axios("api/admin/get-products");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("err", error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const [dataLoading, setDataLoading] = useState(false);
  const fullPath = `${window.location.protocol}//${window.location.host}`;

  const deleteItemHandler = async (id) => {
    try {
      const response = await axios.post("api/admin/delete-product", { id });
      if (response.status === 200) {
        toast.success("Deleted!");
        GetData();
      }
    } catch (error) {
      toast.error("Error deleting product!");
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className={`table`}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <h4 className="py-5 text-center fw-bold">Loading.....</h4>
                ) : (
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={`${fullPath}/${item.image}`} alt="" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          onClick={() => deleteItemHandler(item.id)}
                          className={`btn btn-danger`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
