import React from 'react';
import Catagories from '../../components/catagories_one/Catagories';
import Catagories_two from '../../components/catagories_two/Catagoriestwo';
import Deals from '../../components/deals/Deals';
import Footer from '../../components/footer/Footer';
import Slick from '../../components/hero/Slick';
import Products from '../../components/product/Products';
import SHoppings from '../../components/shoppings/SHoppings';
// import Header from '../../components/header/Header';
const Home = () => {
    return (
        <>
        <main>
            <Slick/>
            <Products/>
            <Catagories_two/>
            <Catagories/>
            <Deals/>
            <SHoppings/>
            <Footer/>
        </main>
        </>
        );
    };
    
    export default Home;