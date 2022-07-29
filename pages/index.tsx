import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mert Turkmenoglu</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <meta name="title" content="Mert Turkmenoglu" />
        <meta name="description" content="Mert Turkmenoglu personal website" />
        <meta property="og:site_name" content="mertturkmenoglu" />
        <meta property="og:title" content="Mert Turkmenoglu" />
        <meta property="og:description" content="Mert Turkmenoglu personal website" />
        <meta property="og:image" content="https://github.com/mertturkmenoglu.png" />
        <meta property="og:url" content="https://mertturkmenoglu.com/" />
        <meta property="og:type" content="blog" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mert Turkmenoglu" />
        <meta name="twitter:description" content="Mert Turkmenoglu personal website" />
        <meta name="twitter:image" content="https://github.com/mertturkmenoglu.png" />
        <meta name="twitter:image:alt" content="Profile picture" />
        <meta name="twitter:creator" content="@capreaee" />
      </Head>

      <div className="container w-11/12 sm:w-full mx-4 sm:mx-auto my-16">
        <header>
          <Image
            src="/static/profile.jpg"
            alt="Profile picture"
            width={128}
            height={128}
            className="rounded-full border-4 border-midnight"
          />
          <h1 className="text-5xl text-midnight font-bold">Mert Turkmenoglu</h1>
          <h2 className="text-3xl text-midnight opacity-80">Software Engineer</h2>
          <hr className="border border-midnight w-11/12 sm:w-2/3 md:w-1/3 mt-2 px-4" />
        </header>

        <main className="mt-16">
          <p className="text-midnight text-xl mx-2 sm:w-2/3 sm:mx-0">
            Hi, my name is <span className="font-bold">Mert</span>. I&apos;m a full-stack software
            developer, a Kotlin enthusiast, and a violin player. I&apos;m interested in full-stack
            web development, programming languages, and design patterns.
          </p>
          <p className="text-midnight text-xl mx-2 sm:w-2/3 sm:mx-0 mt-8">
            Since 2020, I write Medium articles at popular publications. Currently, I&apos;m working
            on Vevericka, a full-stack social media / chat application, and Avalanche, a
            productivity / task management system.
          </p>
        </main>
      </div>
    </>
  );
};

export default Index;
