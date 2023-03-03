import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 
import Container from '../../utils/Container';
import {BiHeart} from 'react-icons/bi'
import {ImArrowRight2} from 'react-icons/im'
import box_img_one from '../../assest/images/stickimg_one.svg'
import box_img_to from '../../assest/images/stickimg_2.png'
import box_img_tre from '../../assest/images/tstickimg_3.svg'
import { useTranslation } from 'react-i18next'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './hero.scss'

function Slick() {
 const [t]  = useTranslation();
  var settings = {
        dots: true,
        infinite: true,
        speed: 4,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500
      };
  return (
    <section className='hero'>
     <Container>
      <nav className="hero-nav">
          <ul className='hero-nav__list'>
            <li>
              <a href="#">{t("hero_text_1")}</a>
            </li>
            <li>
              <BiHeart/>
              <a href="#">{t("hero_text_2")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_3")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_4")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_5")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_6")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_7")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_8")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_9")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_10")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_12")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_13")}</a>
            </li>
            <li>
              <a href="#">{t("hero-text_14")}</a>
            </li>
          </ul>
      </nav> 
      <Slider {...settings}>
      <div className='slick-box'>
        <div className="slick-box__wrapper">
        <div className="slick-box__hero">
        <h1>
           {t("slick-text1")}
          </h1>
          <p>
          {t("slick-text2")}
          </p>
          <button className="slick-btn">{t("slick-text3")}<ImArrowRight2 className='right-icon'/></button>
        </div>
        <ul>
          <li>
             <img src={box_img_one} alt="" />
          </li>
          <li>
             <img src={box_img_to} alt="" />
          </li>
          <li>
             <img src={box_img_tre} alt="" />
          </li>
        </ul>
        </div>
      </div>
      <div className='slick-box_to'>
      <div className="slick-box-wrapper">
       <div className="slick-box-left">
       <h1>
           {t("slick-text1")}
          </h1>
          <p>
          {t("slick-text2")}
          </p>
          <button className="slick-btn">{t("slick-text3")}<ImArrowRight2 className='right-icon'/></button>
       </div>
       <ul>
          <li>
            <img src="https://www.canon.ca/dam/segments/consumer/New-Products/2023-02-13/R8-img-500x500.png" alt="" />
          </li>
          <li>
            <img src="https://fullscale-labs.com/wp-content/plugins/fancy-product-designer/assets/img/product-templates/hoodie_duocolor_front.png" alt="" />
          </li>
          <li>
             <img src='https://alanwalker.com/wp-content/uploads/2021/01/Produkt_2_1800x1800.png' alt="" />
          </li>
        </ul>
        </div>
      </div>
      </Slider>
     </Container>
    </section>
  )
}

export default Slick