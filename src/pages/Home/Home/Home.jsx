import React from 'react';
import Banner from '../Banner';
import HowItWorks from '../HowItWorks';
import OurServices from '../OurServices';
import OurClients from '../OurClients';
import KeyFeature from '../KeyFeature';
import BeMerchant from '../BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <OurClients/>
            <KeyFeature/>
            <BeMerchant/>
        </div>
    );
};

export default Home;