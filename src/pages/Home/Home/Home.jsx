import React from 'react';
import Banner from '../Banner';
import HowItWorks from '../HowItWorks';
import OurServices from '../OurServices';
import OurClients from '../OurClients';
import KeyFeature from '../KeyFeature';
import BeMerchant from '../BeMerchant';
import CustomersFeedback from '../CustomersFeedback';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <OurClients/>
            <KeyFeature/>
            <BeMerchant/>
            <CustomersFeedback/>
            <Faq/>
        </div>
    );
};

export default Home;