import Image from 'next/image';

interface Props {
  className?: string;
}

const Hero = ({ className }: Props): JSX.Element => (
  <header className={className}>
    <h1 className="font-bold text-4xl md:text-5xl text-gray-800 font-sans tracking-wide">
      Mert Turkmenoglu
    </h1>
    <h2 className="text-lg mt-2 tracking-wide font-medium text-gray-800">Software Engineer</h2>
    <h3 className="text-xl md:text-3xl mt-8 tracking-wide font-normal text-gray-800 mx-8 md:mx-auto">
      I&apos;m a full-stack software developer, a Kotlin enthusiast, and a violin player.
    </h3>
    <Image
      src="/static/profile.jpg"
      alt="Profile picture"
      width={192}
      height={192}
      className="w-48 h-48 rounded-full border-2 mt-16 border-purple-600"
    />
  </header>
);

export default Hero;
