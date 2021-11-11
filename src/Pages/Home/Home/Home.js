import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BestDeal from '../BestDeal/BestDeal';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <BestDeal></BestDeal>
            <Footer></Footer>
        </div>
    );
};

export default Home;