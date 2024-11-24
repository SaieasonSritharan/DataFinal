import { SignInButton } from '@clerk/clerk-react';
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Category from './components/category';
import MostSearched from './components/MostSearched';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';


const Homepage = () => {
  return (
    
    <div>
        <Header/>
        <Hero/>
        <Category/>
        <MostSearched/>
        <InfoSection/>
        <Footer/>
    </div>
  );
};

export default Homepage;