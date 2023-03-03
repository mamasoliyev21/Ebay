import React from "react";
import Container from "../../utils/Container";
import { useSelector } from "react-redux";
import './card.scss'
import { NavLink } from "react-router-dom";
const Add_card = () => {
  const setdata = useSelector((state) => state.card);
   const data = setdata
   console.log(data.addedCart);
  return (
    <section>
      <Container>
      <div className="add-card-wrapper">
          {data.addedCart.map((product) => (
            <div key={product[0]?.id} className="add-card__box">
            <img src={product[0]?.images?.at(0)} alt="" />
            <div className="result-bottom">
            <h4>{product[0]?.title}</h4>
              <p>{product[0]?.description}</p>
              <p className="product-price">{product[0].price}</p>
            </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Add_card;
