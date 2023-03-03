import React from 'react'
import Container from '../../utils/Container'
import { AiFillTwitterSquare, AiOutlineFacebook} from 'react-icons/ai'
import { useTranslation} from 'react-i18next'
import usa  from '../../assest/images/usa.svg'
import './footer.scss'
const Footer = () => {
    const [t] = useTranslation();
  return (
    <footer>
     <Container>
         <div className="footer-wrapper">
            <ul className="footer-wrapper__list">
                <li className="footer-wrapper__item">
                   <h2>{t("footer-text1")}</h2>
                   <p>{t("footer-text2")}</p>
                   <p>{t("footer-text3")}</p>
                   <p>{t("footer-text4")}</p>
                   <p>{t("footer-text5")}</p>
                   <p>{t("footer-text6")}</p>
                </li>
                <li className="footer-wrapper__item">
                    <h2>{t("footer-item1")}</h2>
                    <p>{t("footer-item2")}</p>
                    <p>{t("footer-item3")}</p>
                    <p>{t("footer-item4")}</p>
                    <p>{t("footer-item5")}</p>
                    <p>{t("footer-item6")}</p>
                    <h2>{t("footer-item6")}</h2>
                    <p>{t("footer-item7")}</p>
                    <p>{t("footer-item8")}</p>
                    <p>{t("footer-item8")}</p>
        
                </li>
                <li className="footer-wrapper__item">
                    <h2>{t("footer-face")}</h2>
                    <span><AiOutlineFacebook className='footer-icon'/><p>Facebook</p></span>
                    <span><AiFillTwitterSquare className='footer-icon'/><p>Twitter</p></span>
                </li>
                <li className="footer-wrapper__item">
                    <h2>{t("about-text1")}</h2>
                    <p>{t("about-text2")}</p>
                    <p>{t("about-text3")}</p>
                    <p>{t("about-text4")}</p>
                    <p>{t("about-text5")}</p>
                    <p>{t("about-text6")}</p>
                    <p>{t("about-text7")}</p>
                    <p>{t("about-text8")}</p>
                    <p>{t("about-text9")}</p>
                    <p>{t("about-text10")}</p>
                    <p>{t("about-text11")}</p>

                </li>
                <li className="footer-wrapper__item">
                    <h2>{t("end-text")}</h2>
                    <p>{t("end-text1")}</p>
                    <p>{t("end-text2")}</p>
                    <p>{t("end-text3")}</p>
                    <h2>{t("end-text4")}</h2>
                    <p>{t("end-text5")}</p>
                    <p>{t("end-text6")}</p>
                    <p>{t("end-text7")}</p>
                    <strong>eBay Site</strong>
                </li>
            </ul>
         </div>
            <img className='usa-img' src={usa} alt="" />
     </Container>
    </footer>
  )
}

export default Footer