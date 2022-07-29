import React from 'react';
import clsx from 'clsx';
import { MailIcon } from '@heroicons/react/outline';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import MediumIcon from './MediumIcon';

interface Props {
  className?: string;
}

const VerticalContactList = ({ className }: Props): JSX.Element => {
  const list = [
    {
      url: 'mailto:mertturkmenoglu99@gmail.com',
      icon: MailIcon,
    },
    {
      url: 'https://github.com/mertturkmenoglu',
      icon: GitHubIcon,
    },
    {
      url: 'https://linkedin.com/in/mert-turkmenoglu',
      icon: LinkedInIcon,
    },
    {
      url: 'https://mertturkmenoglu.medium.com/',
      icon: MediumIcon,
    },
  ];

  return (
    <aside className={clsx('bg-primary rounded-full text-white px-1.5 py-3', className)}>
      <nav>
        <ul className="flex flex-col-reverse space-y-reverse space-y-2">
          {list.map((item) => (
            <li key={item.url} className="w-6">
              <a href={item.url}>
                <item.icon />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default VerticalContactList;
