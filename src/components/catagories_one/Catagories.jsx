import React from 'react';
import {ImArrowRight2} from 'react-icons/im'
import Container from '../../utils/Container';
import useFetchData from '../../hooks/useFetchdata'
import './catagory.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Catagories = (title) => {
    const data = useFetchData('/categories')
       
    // console.log(data);
    const [t] = useTranslation();
    return (
        <section className='catagory_one'>
            <Container>
                 <div className="catagory_one-wrapper">
                    <div className="catagory-wrapper__title">
                        <h1 title={title}>{t("catagory-title")}</h1>
                         <Link to={`/category/${data.id}`}>
                         <button className="catagory-btn">{t("product-seeall")}  <ImArrowRight2 className='right-icon'/></button> 
                         </Link>
                    </div>
                    <div className="catagory-worked">
                          {
                            data[0].map(category =>
                            <div key={category.id} className='catagory-worked-list'>
                                   <Link key={category.id} to={`/category/${category.id}`}>
                                   <img src={category?.image} alt="" />
                                    <h1 className='category-name'>{category.name}</h1>
                                    </Link>
                            </div>       
                         )
                          }
                    </div>
                 </div>
            </Container>
        </section>
    );
};

export default Catagories;