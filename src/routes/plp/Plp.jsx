import React from "react";
import useFetchData from "../../hooks/useFetchdata";
import Container from "../../utils/Container";
import img from "../../assest/images/div.svg";
import image from "../../assest/images/productimg.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./plp.scss";
const See_all = () => {
  const [t] = useTranslation();
  const data = useFetchData(`/categories`);
  let dataId = useParams();
  const catagorydata = useFetchData(`/categories/${dataId.id}/products`);
  const setdata = catagorydata.reverse(0, 34);
  // console.log(setdata);
  return (
    <section className="plp">
      <Container>
        <div className="catagory-top-box">
          <h1 className="catagory-top_title">{t("catagory-top_title")}</h1>
          <img
            style={{ objectFit: "cover" }}
            className="plp-top-img"
            src="https://www.a2xaccounting.com/img/content/ebay.jpg"
            alt=""
          />
          <h1 className="shop-title">{t("shop-title")}</h1>
        </div>
        <div className="plp-categories">
          {
          data[0].map((category) => (
            <div key={category.id} className="catagory-box-list">
              <Link key={category.id} to={`/category/${category?.id}`}>
                <img className="img-plp" src={category.image} alt="" />
                <h1 className="category-name">{category.name}</h1>
              </Link>
            </div>
          ))}
        </div>
        <div className="plp-catagory-wrapper">
          {setdata[0].map((el) => {
            return (
              <div key={el.id} className="catagory-wrapper-card">
             <Link to={`/pdp/${el.id}`}>
             <img className="catagory-wrapper-img" src={el.images[0]} alt="img"/>
                <h2 className="catagory-wrapper-title">{el.title}</h2>
                <p className="catagory-wrapper-desc">{el.description}</p>
                <img src={img} alt="" />
                <p className="catagory-wrapper-price">${el.price}</p>
                <p style={{ paddingTop: "20px" }}>{el.updatedAt}</p>
             </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default See_all;
