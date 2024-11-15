import { SignInButton } from '@clerk/clerk-react';
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Category from './components/category';
import MostSearched from './components/MostSearched';


const Homepage = () => {
  return (
    
    <div>
        <Header/>
        <Hero/>
        <Category/>
        <MostSearched/>
    </div>
  );
};

export default Homepage;