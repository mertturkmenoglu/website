import Image from 'next/image';

interface Props {
  className?: string;
}

const Hero = ({ className }: Props): JSX.Element => (
  <header className={className}>
    <h1 className="font-bold text-4xl md:text-5xl text-slate-700 font-sans tracking-wide">
      Mert Turkmenoglu
    </h1>
    <h2 className="text-lg mt-2 tracking-wide font-medium text-slate-700">Software Engineer</h2>
    <h3 className="text-xl md:text-3xl mt-8 tracking-wide font-normal text-slate-700 mx-8 md:mx-auto">
      I&apos;m a full-stack software developer, a Kotlin enthusiast, and a violin player.
    </h3>
    <div className="w-48 h-48 mt-16 border-4 border-purple-600  rounded-full ">
      <Image
        src="/static/profile.jpg"
        alt="Profile picture"
        width={192}
        height={192}
        className="rounded-full  "
      />
    </div>
  </header>
);

export default Hero;
