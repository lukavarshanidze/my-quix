import { useEffect, useState } from "react";

import CommonSelection from "../components/UI/CommonSelection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import styles from "../styles/shop.module.scss";

import products from "../assets/data/products";
import ProductList from "../components/UI/ProductsList";
import ProductsList from "../components/UI/ProductsList";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [priceFilter, setPriceFilter] = useState("");
  const { product } = useParams();

  useEffect(() => {
    filterByProductCategory(product)
  }, [product]);

  const filterByProductCategory = (filterName) => {
    if (filterName === "all") {
      setProductsData(products);
    }

    if (filterName === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProducts);
    }

    if (filterName === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredProducts);
    }

    if (filterName === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProducts);
    }

    if (filterName === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredProducts);
    }

    if (filterName === "wireless") {
      const filteredProducts = [products].filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    filterByProductCategory(filterValue);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  const handleSort = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "ascending") {
      const filtered = [...productsData].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setProductsData(filtered);
    }
    if (filterValue === "descending") {
      const filtered = [...productsData].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setProductsData(filtered);
    }
  };

  return (
    <Helmet title="Shop">
      <CommonSelection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className={styles.filter__widget}>
                <select onChange={handleFilter}>
                  <option value="all">Filter By Category ( All )</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className={`text-end`}>
              <div className={styles.filter__widget}>
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className={styles.search__box}>
                <input
                  type="text"
                  placeholder="Search......"
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <section className={`pt-0`}>
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1 className={`text-center fs-4 pt-5`}>
                  No Products are found
                </h1>
              ) : (
                <ProductsList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </section>
    </Helmet>
  );
};

export default Shop;
