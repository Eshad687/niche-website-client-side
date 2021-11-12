import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BestDeal from '../BestDeal/BestDeal';
import Products from '../Products/Products';
import ReviewsHome from '../ReviewsHome/ReviewsHome';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ReviewsHome></ReviewsHome>
            <BestDeal></BestDeal>
            <Footer></Footer>
        </div>
    );
};

export default Home;