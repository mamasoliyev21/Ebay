import React from "react";
import Container from "../../utils/Container";
import logo from "../../assest/images/ebay_logo.svg";
import { CiSearch } from "react-icons/ci";
import "./search.scss";
import { useTranslation } from "react-i18next";
import useFetchData from "../../hooks/useFetchdata";
import instance from "../../api/instance";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation()
  const catagoryRender =(e)=>{
      instance.get(`/categories`)
      .then(respons => console.log(respons.data))
      
  }

  const [searchData, setsearchdata] = useState([]);
  const [searchValue, setSearchValue] =useState("")
  const searchFunc = (e) => {
    setSearchValue(e.target.value)
    console.log(e.target.value);
    instance
      .get(`/products/?title=${e.target.value}&offset=10&limit=10`)
      .then((response) => setsearchdata(response.data))
      .catch((err) => console.error(err));
  };
   const SearchResult = (e) =>{
    e.preventDefault();
    window.location.pathname= `/result/${searchValue}`
   }
  const data = useFetchData(`/categories`);
  const [t] = useTranslation();
  return (
    <section className="search">
      <Container>
        <div className="search-wrapper">
          <div className="search-elements">
            <div className="logo-items">
              <Link to={`/`}> 
              <img src={logo} alt="logo" />
              </Link>
              <select>
                <option style={{width : '30px'}}>{t("search_text_1")}</option>
              </select>
            </div>
                <CiSearch className="input-icon" />
                <input  onChange={searchFunc}type="text" placeholder={t("search_text_2")} />
               <button onClick={SearchResult} type="submit" className="btn-search"> {t("search_text_5")}</button>
             {searchData?.length >0  && searchValue ? <div className="search-suggestions">
                  {
                    searchData.map(item =>
                    <Link  to={`/pdp/${item.id}`}>
                      <p className="search-item__title">{item.title}</p>
                    </Link>  
                    )
                  }
              </div> : <></> }
              <select  onChange={catagoryRender} className="search-select" name="" id="">
                <option value="">{t("search_text_3")}</option>
                {data[0].map((catagory) => (
                // <Link>
                  <option key={catagory.id}>{catagory?.name}</option>
                //  </Link>
                ))}
              </select>
               
              <h2 className="search-h2" style={{ paddingTop: "15px" }}>{t("search_text_4")}</h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Search;
