import React from 'react'
import Container from '../../utils/Container'
import useFetchdata from '../../hooks/useFetchdata'
import {Link} from 'react-router-dom'
import {ImArrowRight2} from 'react-icons/im'
import {useTranslation} from 'react-i18next'
import './shoppings.scss'
const SHoppings = () => {
  const data = useFetchdata(`/products`) 
  const [t] = useTranslation();
  return (
    <section className='all-products'>
      <Container>
         <div className='shooping-top__box'>
         <h1 className='all-product-title'>{t("shopping-title")}</h1>
         <Link to={`/mainproduct`} style={{cursor: "pointer"}} className="shopping-top__btn">{t("product-seeall")}  <ImArrowRight2 className='right-icon'/></Link>
         </div>
         <div className="all-products-wrapper">
          {
            data[0].map(e => 
             <div key={e.id} className="products-box">
              <Link  to={`/pdp/${e.id}`}>
              <img className='all-products-img' src={e.images} alt="" />
              <p>{e.price}</p>
              </Link>
              <p>$599.99 · 58% OFF</p>
             </div>  
            )
          }
         </div>
      </Container>
    </section>
  )
}

export default SHoppings