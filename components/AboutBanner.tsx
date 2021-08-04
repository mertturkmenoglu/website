import React from 'react';
import classnames from 'classnames';
import TechnicalStack from '../components/TechnicalStack';

interface Props {
  className?: string;
}

const AboutBanner = ({ className }: Props): JSX.Element => (
  <>
    <section
      className={classnames('flex flex-col items-center pt-32 pb-64', className)}
      id="about-banner"
    >
      <h1 className="text-gray-50 text-4xl font-bold font-sans nunito-title tracking-wide">
        Hi, I&apos;m Mert
      </h1>

      <p className="text-gray-50 w-11/12 md:w-3/4 lg:w-1/2 mt-8 text-xl font-thin text-center tracking-wider leading-8">
        I&apos;m a senior computer engineering student at Yildiz Technical University, Istanbul /
        Turkey.
      </p>
      <p className="text-gray-50 w-11/12 md:w-3/4 lg:w-1/2 mt-2 text-xl font-thin text-center tracking-wider leading-8">
        I&apos;m interested in full-stack web development, programming languages, and design
        patterns.
      </p>
      <p className="text-gray-50 w-11/12 md:w-3/4 lg:w-1/2 mt-2 text-xl font-thin text-center tracking-wider leading-8">
        Since 2020, I write Medium articles at popular publications. Currently, I&apos;m working on
        Vevericka, a full-stack social media / chat application, and Avalanche, a productivity /
        task management system.
      </p>
    </section>
    <TechnicalStack className="-mt-32" />
  </>
);

export default AboutBanner;
