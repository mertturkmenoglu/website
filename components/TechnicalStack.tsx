import React from 'react';
import clsx from 'clsx';
import {
  CollectionIcon, CubeIcon, DatabaseIcon, TerminalIcon,
} from '@heroicons/react/outline';

interface Props {
  className?: string;
}

const TechnicalStack = ({ className }: Props): JSX.Element => {
  const languages = ['Kotlin', 'TypeScript', 'Java', 'JavaScript', 'Python', 'C', 'Go', 'Haskell'];
  const frameworks = ['React', 'Next', 'Vue', 'NestJS', 'Express', 'Node', 'Spring Boot'];
  const databases = ['Postgres', 'MongoDB', 'Firestore', 'Redis'];
  const others = ['Docker', 'Git', 'Linux', 'Jira', 'Confluence', 'Jest', 'Heroku', 'GCP'];

  return (
    <section
      className={clsx(
        'bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 md:w-3/4 lg:1/2 mx-auto rounded-lg py-8',
        className,
      )}
    >
      <div className="flex flex-col items-center">
        <TerminalIcon className="w-8 h-8 text-purple-600" />
        <h3 className="text-2xl font-medium my-2 tracking-wider">Languages</h3>
        <ul className="space-y-3 text-center">
          {languages.map((language) => (
            <li key={language} className="font-medium">
              {language}
            </li>
          ))}
        </ul>
      </div>

      <hr className="md:hidden mt-8" />

      <div className="flex flex-col items-center mt-8 md:mt-0">
        <CollectionIcon className="w-8 h-8 text-purple-600" />
        <h3 className="text-2xl font-medium my-2 tracking-wider">Frameworks</h3>
        <ul className="space-y-3 text-center">
          {frameworks.map((framework) => (
            <li key={framework} className="font-medium">
              {framework}
            </li>
          ))}
        </ul>
      </div>

      <hr className="md:hidden mt-8" />

      <div className="flex flex-col items-center mt-8 md:mt-0">
        <DatabaseIcon className="w-8 h-8 text-purple-600" />
        <h3 className="text-2xl font-medium my-2 tracking-wider">Databases</h3>
        <ul className="space-y-3 text-center">
          {databases.map((database) => (
            <li key={database} className="font-medium">
              {database}
            </li>
          ))}
        </ul>
      </div>

      <hr className="md:hidden mt-8" />

      <div className="flex flex-col items-center mt-8 md:mt-0">
        <CubeIcon className="w-8 h-8 text-purple-600" />
        <h3 className="text-2xl font-medium my-2 tracking-wider">Other</h3>
        <ul className="space-y-3 text-center">
          {others.map((item) => (
            <li key={item} className="font-medium">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnicalStack;
