import React from "react";
import Container from "../../utils/Container";
import saveImg from "../../assest/images/saveimg.png";
import { Link, useParams } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import useFetchData from "../../hooks/useFetchdata";
import { Swiper,  } from "swiper/react";
import Slider from "react-slick";
import "./product.scss";
import { useTranslation } from "react-i18next";
const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = useFetchData(`/products`);


  // console.log(data);
  const [t] = useTranslation();
  return (
    <section className="products">
      <Container>
        <div className="product-wrapper">
          <div className="product-wrapper__top">
            <img src={saveImg} alt="img" />
          </div>
          <div className="product-wrapper__cards">
            <div className="product-wrapper-left">
              <h1 className="product-wrapper__title">{t("product-title")}</h1>
              <p style={{ paddingTop: "12px" }}>{t("product-textp")}</p>
              <Link  to={`/mainproduct`}>
                <button style={{ cursor: "pointer" }} className="product-btn">
                  {t("product-seeall")} <ImArrowRight2 className="right-icon" />
                </button>
              </Link>
            </div>
            <div className="product-card_wrapper">
              {data[0].map((product) => (
                <Slider {...settings}>
                  <div style={{ display: "flex" }} className="product-box">
                    <div className="product-img-wrapper">
                      <Link key={product.id} to={`/pdp/${product.id}`}>
                        <img className="img" src={product.images} alt="" />
                        <h2>${product.price}</h2>
                      </Link>
                      <h2>${product.price} 74% OFF</h2>
                    </div>
                  </div>
                </Slider>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
