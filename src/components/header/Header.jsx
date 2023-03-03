import React from 'react'
import Container from '../../utils/Container'
import { Link } from 'react-router-dom'
import clock from '../../assest/images/clock.svg'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import i18n from '../../languege/i18next'
import './header.scss'
import cardReduser from '../../redux/reducer/card'
const Header = () => {
console.log(cardReduser.length);
   

  const userEmail = useSelector(state => state.auth.email)
  console.log(userEmail);
  const [t] = useTranslation();
  return (
    <header className='main-header'>
       <Container>
          <nav className='main-header__nav'>
               <ul className='nav-list'>
                  <li >
                      <p>{t("header_p_1")}</p>
                      <Link to='/sign' className='header-link'>
                        Sign in 
                      </Link>
                      <p>{t("header_p_2")}</p>
                      <Link to='/registr' className='header-link'>
                         registr
                      </Link>
                    <p className='nav-item-registr'> 
                       {
                        userEmail ? userEmail: <></>
                      }
                      </p>
                  </li>
            
                  <li>
                    <a href="#">{t("header_p_3")}</a>
                  </li>
                  <li>
                    <a href="#">{t("header_p_4")}</a>
                  </li>
                  <li>
                    <a href="#">{t("header_p_5")}</a>
                  </li>
               </ul>
               <div className="header-right-items">
               <li style={{marginRight: '20px', display: 'flex'}}>
               <li className={localStorage.getItem("lang") =="uz"&& "active"} onClick={()=> i18n.changeLanguage("uz")}>UZ</li>
                    <span>
                      ||
                    </span>
                    <li className={localStorage.getItem("lang") =="eng"&& "active"} onClick={()=> i18n.changeLanguage("eng")}>ENG</li>
                  </li>
               <li>
                <a href="#">{t("header_p_6")}</a>
               </li>
               <li>
                <select>
                  <option value="">{t("header_p_7")}</option>
                </select>
               </li>
               <li>
               <select>
                <option value="">{t("header_p_8")}</option>
               </select>
               </li>
               <div>
                <img src={clock} alt="" />
              <Link to={`/korzinka`}>
                {
                  !cardReduser ? cardReduser.length+1: <></>
                }
                 <MdOutlineShoppingCart className='buy-product'/>
              </Link>
               </div>
               </div>
          </nav>
       </Container>
    </header>
  )
}

export default Header