import React from "react";
import Container from "../../utils/Container";
import Plp from "../../routes/plp/Plp";
import useFetchData from "../../hooks/useFetchdata";
import './mainproduct.scss'
import { NavLink } from "react-router-dom";
const Mainproduct = () => {
  const data = useFetchData(`/products`);
  return (
    <section>
      <Container>
        <Plp />
        <div className="mainproduc-wrapper">
          {data[0].map((product) => (
            <div className="product-card">
            <NavLink to={`/pdp/${product.id}`}>
            <img src={product.images} alt="" />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p className="product-price">{product.price}</p>
            </NavLink>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mainproduct;
