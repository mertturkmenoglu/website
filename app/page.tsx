import type { Metadata, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mert Turkmenoglu',
  viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
  description: 'Mert Turkmenoglu personal website',
  openGraph: {
    siteName: 'mertturkmenoglu',
    title: 'Mert Turkmenoglu',
    description: 'Mert Turkmenoglu personal website',
    images: {
      url: 'https://github.com/mertturkmenoglu.png',
      alt: 'Profile picture',
    },
    url: 'https://mertturkmenoglu.com/',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Mert Turkmenoglu',
    description: 'Mert Turkmenoglu personal website',
    images: {
      url: 'https://github.com/mertturkmenoglu.png',
      alt: 'Profile picture',
    },
    creator: '@capreaee',
  },
};

const Index: NextPage = () => {
  return (
    <div className="container w-11/12 sm:w-full mx-4 sm:mx-auto my-16">
      <header>
        <Image
          src="/static/profile.jpg"
          alt="Profile picture"
          width={128}
          height={128}
          className="rounded-full"
        />
        <h1 className="text-5xl text-midnight font-bold">Mert Turkmenoglu</h1>
        <h2 className="text-3xl text-midnight opacity-80">Software Engineer</h2>
        <hr className="border border-midnight w-11/12 sm:w-2/3 md:w-1/3 mt-2 px-4" />
      </header>

      <main className="mt-16">
        <p className="text-midnight text-xl mx-2 sm:w-2/3 sm:mx-0">
          Hi, my name is <span className="font-bold">Mert</span>. I&apos;m a full-stack software
          developer, a Kotlin enthusiast, and a violin player. I&apos;m interested in full-stack web
          development, programming languages, and design patterns.
        </p>
        <p className="text-midnight text-xl mx-2 sm:w-2/3 sm:mx-0 mt-8">
          Since 2020, I write Medium articles at popular publications. Currently, I&apos;m working
          on Vevericka, a full-stack social media / chat application, and Avalanche, a productivity
          / task management system.
        </p>

        <nav className="mt-4">
          <ul className="flex items-baseline space-x-4 flew-wrap">
            <li>
              <Link href="https://github.com/mertturkmenoglu" className="font-bold underline">
                GitHub
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/mert-turkmenoglu/"
                className="font-bold underline"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Index;
