import React from 'react'
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main'
import MidCarousel from '../../components/mid-carousel/MidCarousel';
import SecondCards from '../../components/second-cards/SecondCards';

const home = () => {
    return (
        <div>
            <HeroBanner />
            <Main />
            <MidCarousel />
            <SecondCards />
        </div>
    )
}

export default home