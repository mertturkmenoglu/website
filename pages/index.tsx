import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/outline';
import AboutBanner from '../components/AboutBanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

import TopNavigation from '../components/TopNavigation';
import VerticalContactList from '../components/VerticalContactList';
import Work from '../components/Work';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mert Turkmenoglu</title>
      </Head>

      <header>
        <TopNavigation className="pt-8" />
      </header>

      <main>
        <VerticalContactList className="fixed bottom-8 left-8 hidden md:visible" />
        <div className="h-screen flex flex-col">
          
          <Hero className="flex flex-col items-center mt-32 text-center" />
          <div className="flex justify-center items-end flex-grow">
            <Link href="/#about-banner">
              <a>
                <ChevronDownIcon className="w-16 h-16 animate-bounce text-purple-600 mb-8" />
              </a>
            </Link>
          </div>
        </div>

        <AboutBanner className="w-full from-indigo-600 to-purple-600 bg-gradient-to-bl" />
        <Work className="mt-32" />
        <Projects className="mt-32" />
        <Contact className="mt-48" />
      </main>

      <Footer className="w-full from-indigo-600 to-purple-600 bg-gradient-to-bl mt-32 md:mt-64" />
    </>
  );
};

export default Index;
