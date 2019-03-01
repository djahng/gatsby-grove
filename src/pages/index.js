import React from 'react';

import NavBar from '../components/NavBar';
import Showcase from '../components/Showcase';
import About from '../components/About';
import Explore from '../components/Explore';
import Quotes from '../components/Quotes';
import ImageCarousel from '../components/ImageCarousel';
import SocialMedia from '../components/SocialMedia';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import '../scss/main.scss';

export default () => (
  <>
    <NavBar />
    <Showcase />
    <About />
    <Explore />
    <Quotes />
    <ImageCarousel />
    <SocialMedia />
    <Newsletter />
    <Footer />
  </>
);
