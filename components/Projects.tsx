import React from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
}

const Projects = ({ className }: Props): JSX.Element => (
  <section className={clsx('flex flex-col mt-16 w-11/12 md:w-3/4 lg:1/2 mx-auto', className)}>
    <h1 className="text-4xl font-bold font-sans nunito-title tracking-wide text-center">
      Projects
    </h1>
    <ul className="mt-16 space-y-32 mx-auto lg:mx-0">
      <li className="flex">
        <div className="">
          <div className="text-2xl">Avalanche</div>
          <hr className="w-32 mt-2 border border-purple-600" />
          <div className="mt-0.5 text-sm tracking-widest text-gray-600">
            Project Management System
          </div>
          <div className="p-4 mt-4 ml-4 w-full lg:w-10/12 shadow-lg bg-purple-100 rounded-md text-purple-700 flex items-center leading-4 tracking-wide">
            A website to maximize productivity. You can use a Kanban board to track your issues, an
            instant messenger to chat with your teammates, a schedular to help you organize
            meetings.
          </div>
          <div>
            <ul className="flex text-xs space-x-3 mt-1 ml-4 text-gray-600">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>NestJS</li>
              <li>Digital Ocean</li>
            </ul>
          </div>
        </div>
        <div className="rounded-md invisible lg:visible object-cover w-10/12">
          <img src="/static/avalanche.png" alt="Avalanche" className="" />
        </div>
      </li>

      <hr className="border-dashed border-purple-300" />

      <li className="flex">
        <div className="">
          <div className="text-2xl">Vevericka</div>
          <hr className="w-32 mt-2 border border-purple-600" />
          <div className="mt-0.5 text-sm tracking-widest text-gray-600">Social Media</div>
          <div className="p-4 mt-4 ml-4 w-full lg:w-10/12 shadow-lg bg-purple-100 rounded-md text-purple-700 flex items-center leading-4 tracking-wide">
            A social media website. You can write short &quot;Vik&quot;s and send instant messages
            to people you follow.
          </div>
          <div>
            <ul className="flex text-xs space-x-3 mt-1 ml-4 text-gray-600">
              <li>Vue</li>
              <li>TypeScript</li>
              <li>React Native</li>
              <li>Material UI</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="rounded-md invisible lg:visible object-cover w-10/12">
          <img src="/static/vevericka.png" alt="Vevericka" className="" />
        </div>
      </li>
    </ul>
  </section>
);

export default Projects;
