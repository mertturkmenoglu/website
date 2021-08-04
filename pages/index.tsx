import { ChevronDownIcon } from '@heroicons/react/outline';
import React from 'react';
import AboutBanner from '../components/AboutBanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

import TopNavigation from '../components/TopNavigation';
import VerticalContactList from '../components/VerticalContactList';
import Work from '../components/Work';

const Index = (): JSX.Element => (
  <main>
    <VerticalContactList className="fixed bottom-8 left-8 invisible md:visible" />
    <div className="h-screen flex flex-col">
      <TopNavigation className="pt-8" />
      <Hero className="flex flex-col items-center mt-32 text-center" />
      <div className="flex justify-center items-end flex-grow">
        <a href="/#about-banner">
          <ChevronDownIcon className="w-16 h-16 animate-bounce text-purple-600 mb-8" />
        </a>
      </div>
    </div>

    <AboutBanner className="w-full from-indigo-600 to-purple-600 bg-gradient-to-bl" />
    <Work className="mt-32" />
    <Projects className="mt-32" />
    <Contact className="mt-48" />
    <Footer className="w-full from-indigo-600 to-purple-600 bg-gradient-to-bl mt-32 md:mt-64" />
  </main>
);

export default Index;
