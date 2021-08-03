import React from 'react';
import Link from 'next/link';
import SquirrelLogo from './SquirrelLogo';

interface Props {
  className?: string;
}

const TopNavigation = ({ className }: Props): JSX.Element => (
  <nav className={className}>
    <ul className="flex justify-between items-center mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-80">
      <li>
        <SquirrelLogo className="text-purple-600 w-12 h-12" />
      </li>
      <li>
        <Link href="/#contact">
          <a className="rounded-full border-2 border-purple-600 text-purple-600 text-lg font-medium py-2 px-4">
            Contact Me
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default TopNavigation;
