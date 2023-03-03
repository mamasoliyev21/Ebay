import React from 'react'
import Container from '../../utils/Container'
import {ImArrowRight2}  from 'react-icons/im'
import ebay from '../../assest/images/ebay.svg'
import box3 from '../../assest/images/box3.png'
import img_one from '../../assest/images/div.png'
import { useTranslation} from 'react-i18next'
import './deals.scss'
const Deals = () => {
    const [t] = useTranslation();
  return (
    <section className='deals'>
        <Container>
            <div className="deals-wrapper">
                <div className="deals-wrapper__box">
                    <p className='box-text1'>{t("deals-text1")}</p>
                    <img style={{width: "160px"}} src={ebay} alt="" />
                    <h2>{t("deals-text2")}</h2>
                    <p className='box-text2'>{t("deals-text3")}</p>
                    <button className="wrapper-box__btn">
                       {t("deals-text4")} <ImArrowRight2 className='icon'/>
                    </button>
                </div>
                <div className="deals-wrapper__box">
                   <img src={img_one} alt="" />
                </div>
                <div className="deals-wrapper__box">
                    <img className='box-3-img' src={box3} alt="" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Deals