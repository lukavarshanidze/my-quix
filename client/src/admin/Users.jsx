import { Container, Row, Col } from "reactstrap";
import GetData from "../custom-hooks/GetData";

const Users = () => {
  const { data, loading } = GetData();
  //${styles.table}
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className={`fw-bold`}>Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className={``}> 
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                    loading ? <h5 className="pt-5 fw-bold">Loading.....</h5> 
                    :
                    data?.map((item, index) => {
                        <tr>
                            <td><img src={item.pho}/></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    })
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
