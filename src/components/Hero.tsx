import Input from './Input';

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  return (
    <main className="relative overflow-hidden mx-auto max-w-[1440px] px-6 py-10 pb-32 ">
      <h1 className="font-extrabold text-sky-100 text-7xl pb-3">{title}</h1>
      <div className="flex">
        <section className="w-1/2 flex flex-col justify-between">
          <p className="font-extralight text-sky-50 text-lg text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iusto
            quidem quos tenetur quas esse! Similique nostrum quae maxime dolorem
            libero excepturi veniam dicta magnam autem quibusdam. Inventore,
            quis deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Reiciendis maxime repellendus obcaecati veniam qui?
            Reprehenderit soluta veniam nostrum nam consequatur quae dolor iure
            ea molestiae, praesentium a dicta temporibus possimus.
          </p>
          <Input size={'large'} />
        </section>
        <section className="flex flex-col items-center justify-center w-1/2">
          <img
            src="/perico.jpg"
            alt="perico"
            className="w-96 h-80 rounded-md"
          />
          <blockquote className="text-sky-200 font-semibold italic">
            The perico thing
          </blockquote>
        </section>
      </div>
    </main>
  );
};

export default Hero;
