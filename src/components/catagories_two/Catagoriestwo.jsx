import React from 'react';
import {ImArrowRight2} from 'react-icons/im'
import Container from '../../utils/Container';
import useFetchData from '../../hooks/useFetchdata'
import '../catagories_one/catagory.scss'
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const Catagories_two = () => {
    const setdata = useFetchData(`/categories/4/products`)
    const data = setdata.reverse()
   const categoryId = useParams();
    const [t] = useTranslation();
    return (
        <section style={{paddingTop: "90px"}} className='catagory_one'>
            <Container>
                 <div className="catagory_one-wrapper">
                    <div style={{width: '50%'}} className="catagory-wrapper__title">
                        <h1 >{t("catagory-extra")}</h1>
                       { 
                            <Link to={`/mainproduct`}>
                            <button style={{cursor: "pointer"}} className="catagory-btn">{t("product-seeall")}  <ImArrowRight2 className='right-icon'/></button>
                            </Link>    
                         }
                    </div>
                    <div className="catagory-worked">
                          {
                            data[0].map(category =>
                            <div key={category.id} className='catagory-worked-list'>
                                   <Link key={category.id} to={`/category/${category.id}`}>
                                   <img src={category?.images} alt="" />
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

export default Catagories_two;