import React from 'react';
import classnames from 'classnames';
import { MailIcon } from '@heroicons/react/outline';
import SquirrelLogo from './SquirrelLogo';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import MediumIcon from './MediumIcon';

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  const navItems = [
    {
      icon: <MailIcon className="w-8 h-8 text-white" />,
      href: 'mailto:mertturkmenoglu99@gmail.com',
    },
    {
      icon: <GitHubIcon className="w-8 h-8 text-white" />,
      href: 'https://github.com/mertturkmenoglu',
    },
    {
      icon: <LinkedInIcon className="w-8 h-8 text-white" />,
      href: 'https://www.linkedin.com/in/mert-turkmenoglu',
    },
    {
      icon: <MediumIcon className="w-8 h-8 text-white" />,
      href: 'https://mertturkmenoglu.medium.com/',
    },
  ];

  return (
    <footer className={classnames('flex flex-col items-center py-16', className)}>
      <SquirrelLogo className="text-white h-12 w-12" />
      <h1 className="text-white mt-8 text-2xl font-mono">We are the squirrels who say Vik!</h1>
      <nav className="my-8">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              <li className="text-white border-2 rounded-full p-2 flex items-center justify-center">
                {item.icon}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
