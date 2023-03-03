import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../utils/Container";
import useFetchData from "../../hooks/useFetchdata";
import text_img from '../../assest/images/text.svg'
import text2 from '../../assest/images/text1.svg'
import "./pdp.scss";
import instance from "../../api/instance";
import { useDispatch } from "react-redux";
const Pdp = () => {
  const dispatch = useDispatch();
  const dataId = useParams();
  const data = useFetchData(`/products/${dataId.id}`);
  const pdpData = useFetchData(`/categories/${dataId.id}/products`);
  const Add_cards_data = (e)=>{
    e.preventDefault();
    instance.get(`/products/${dataId.id}`)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
    if(data){
      dispatch({
        data: data,
        type: "CARD_DATA"
      })
    }
  }
  console.log( pdpData);

  return (
    <section className="pdp">
      <Container>
        <div className="pdp-wrapper">
          {data.map((e) => (
            <>
              <div className="pdp-wrapper__aside">
                <h1 className="asi-title">
                  EXTRA <strong> $10</strong> OFF 3+ ITEMS WITH CODE{" "}
                  <strong>10OFF2023TECH</strong>
                </h1>
                <div className="wrapper-aside__card">
                 <Link to={`/pdp/${dataId.id}`}>
                 <img src={e?.images} alt="" />
                 </Link>
                </div>
              </div>
              <div className="pdp-wrapper__bside">
                <h1 className="bside-title">{e.title}</h1>
                <ul className="bside-list">
                  <li className="bside-list__item">
                    <h4 className="bside-h4">Description:</h4>
                    <div className="item-one">
                      {/* <p>Open box</p> */}
                      <p>{e.description}</p>
                    </div>
                  </li>
                  <li className="bside-list__item">
                    <h4>Title:</h4>
                    <span>
                      <p>{e.title}</p>
                    </span>
                  </li>
                  <li className="bside-list__item">
                    <h4>updatedAt:</h4>
                    <span>
                      <p>{e.updatedAt}</p>
                    </span>
                  </li>
                  <li className="bside-list__item">
                    <h4>creationAt:</h4>
                    <span>
                      <p>{e.creationAt}</p>
                    </span>
                  </li>
                  <li className="bside-list__item">
                    <h4>ID:</h4>
                    <span>
                      <p>{e.id}</p>
                    </span>
                  </li>
                </ul>
                <div
                  className="box-bottom"
                  style={{ display: "flex", paddingTop: "15px" }}
                >
                  <div style={{ display: "flex" }}>
                    <h4>Price:</h4>
                    <p className="box-price">${e.price}</p>
                  </div>
                  <div className="box-btns">
                    <button className="btn-buy">Buy It Now</button>
                    <button  onClick={
                      Add_cards_data} className="btn-addtocard">Add to cart</button>
                  </div>
                <div className="text-img">
                <img src={text2} alt="" />
                 <img className="text-img2" src={text_img} alt="" />
           </div>
                </div>
              </div>
              
            </>
          ))}
        </div>
        <div className="pdp-catagories">
          <div className="pdp-top">
            <h1 className="pdp-title">Sponsored items customers also bought</h1>
            <p className="pdp-text">Feedback on our suggestions</p>
          </div>
          <div className="pdp-catagories__wrapper">
            {pdpData[0].map((idData) => (
              <div className="pdp-wrapper__box">
                <Link to={`categories/${idData.id}/products`}>
                  <img className="pdp-wrapper_img" src={idData.images} alt="" />
                  <div className="div">
                    <h1>{idData.title}</h1>
                    <p>{idData.description}</p>
                    <p>Pre-owned</p>
                    <strong>{idData.price}</strong>
                    <p>{idData.updatedAt}</p>
                  </div>
                </Link>
              </div>
            ))}
         
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pdp;
