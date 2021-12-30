import React, { useState, useRef } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
}

const Work = ({ className }: Props): JSX.Element => {
  const [index, setIndex] = useState(0);

  const places = ['Havas CX', 'Softtech', 'Sociable'];

  const divRef = useRef<HTMLDivElement>(null);

  const descriptions = [
    <div key="havas">
      <div>
        <div className="text-lg md:text-2xl font-medium nunito-title">
          Software Engineer <span className="text-purple-600">@ Havas CX</span>
        </div>
        <div className="mt-1 italic font-sans nunito-title">May 2021 - Present</div>
      </div>
      <hr className="w-1/2 my-2" />
      <ul className="space-y-3">
        <li>Worked as a full-stack web developer</li>
        <li>Involved in product development and deployment</li>
        <li>Studied various Front End concepts including accessibility</li>
        <li>Created project techinal documentations</li>
        <li>Built in-house and client-requested applications</li>
        <li>Used Next.js, TypeScript, Contentful, Docker, TailwindCSS, Jest</li>
      </ul>
    </div>,
    <div key="softtech">
      <div>
        <div className="text-lg md:text-2xl font-medium nunito-title">
          Software Engineer Intern <span className="text-purple-600">@ Softtech</span>
        </div>
        <div className="mt-1 italic font-sans nunito-title">September 2020 - October 2020</div>
      </div>
      <hr className="w-1/2 my-2" />
      <ul className="space-y-3">
        <li>Worked as a full-stack web developer</li>
        <li>Studied microservices architecture and design patterns</li>
        <li>Implemented IMDB clone with Vue.js and Spring Boot</li>
        <li>Used MongoDB and Bootstrap</li>
      </ul>
    </div>,
    <div key="sociable">
      <div>
        <div className="text-lg md:text-2xl font-medium nunito-title">
          Android Developer Intern <span className="text-purple-600">@ Sociable</span>
        </div>
        <div className="mt-1 italic font-sans nunito-title">January 2019 - April 2019</div>
      </div>
      <hr className="w-1/2 my-2" />
      <ul className="space-y-3">
        <li>Studied Android development and OOP concepts.</li>
        <li>Created an Android game.</li>
        <li>Used Kotlin, Java, Android Studio, Jira, Git, GitHub.</li>
      </ul>
    </div>,
  ];

  const onDescriptionLoad = () => {
    const { current } = divRef;

    if (current !== null) {
      current.style.opacity = '0';
    }
  };

  return (
    <section className={clsx('flex flex-col items-center mt-16', className)}>
      <h1 className="text-4xl font-bold font-sans nunito-title tracking-wide">
        Where I&apos;ve Worked
      </h1>

      <div className="w-11/12 md:w-3/4 lg:w-1/2 mt-8 mb-16 flex">
        <div className="w-1/4">
          <nav>
            <ul>
              {places.map((item, i) => (
                <li key={item} className={i === index ? 'border-l-2 border-purple-600' : ''}>
                  <div
                    className="ml-4 text-base md:text-lg my-4 font-medium cursor-pointer"
                    onClick={() => setIndex(i)}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="w-3/4 h-64 md:h-48 text-gray-800"
          ref={divRef}
          onLoad={() => onDescriptionLoad()}
        >
          {descriptions[index]}
        </div>
      </div>
    </section>
  );
};

export default Work;
