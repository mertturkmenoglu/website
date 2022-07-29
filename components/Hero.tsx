import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  className?: string;
}

const Hero = ({ className }: Props): JSX.Element => (
  <article className={clsx('flex', className)}>
    <div className="h-32 w-32 object-fill border-4 border-primary rounded-full flex items-center justify-center m-0 p-0 border-collapse">
      <Image
        src="/static/profile.jpg"
        alt="Profile picture"
        width={128}
        height={128}
        className="rounded-full m-0 p-0"
      />
    </div>
    <h1 className="font-bold text-4xl md:text-5xl text-neutral-200 font-sans tracking-wide">
      Mert Turkmenoglu
    </h1>
    <h2 className="text-lg mt-2 tracking-wide font-medium text-neutral-200">Software Engineer</h2>
    <h3 className="text-xl md:text-3xl mt-8 tracking-wide font-normal text-neutral-200 mx-8 md:mx-auto">
      I&apos;m a full-stack software developer, a Kotlin enthusiast, and a violin player.
    </h3>
  </article>
);

export default Hero;
