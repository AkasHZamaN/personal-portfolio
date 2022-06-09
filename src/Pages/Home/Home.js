import React from 'react';
import ContactForm from './ContactForm';
import HomeBanner from './HomeBanner';
import HomeHero from './HomeHero';
import HomeLogos from './HomeLogos';
import HomeProject from './HomeProject';
import Purchase from './Purchase';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeHero></HomeHero>
            <HomeLogos></HomeLogos>
            <HomeProject></HomeProject>
            <ContactForm></ContactForm>
            <Purchase></Purchase>
        </div>
    );
};

export default Home;