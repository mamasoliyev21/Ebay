import React from "react";
import Container from "../../utils/Container";
import { useParams } from "react-router-dom";
import "./searchvalue.scss";
import { Link } from "react-router-dom";
import Plp from '../plp/Plp'
import useFetchData from "../../hooks/useFetchdata";
const Searchvalue = () => {
  const productInfo = useParams();
  const data = useFetchData(`/products?title=${productInfo.productName}`);
  console.log(data);
  return (
    <section>
      <Plp/>
      <Container>
        <div className="search-result__wrapper">
            {data[0].map((product) => (
              <div className="product-card">
                <Link to={`/pdp/${product.id}`}>
                  <img src={product.images} alt="" />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p className="product-price">{product.price}</p>
                </Link>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Searchvalue;
