import About from '@/components/About';
import ImagesStories from '@/components/ImagesStories';
import LetsTalk from '@/components/LetsTalk';

export default function Home() {
  return (
    <div className="absolute flex min-h-full justify-between p-12 max-lg:flex-col max-lg:items-center max-lg:text-center max-sm:px-6 max-sm:pt-0">
      <div className="absolute left-1/2 top-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 max-xl:w-[350px] max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:transform-none max-sm:w-[calc(100%+theme(space.12))]">
        <ImagesStories />
      </div>

      <About />
      <LetsTalk />
    </div>
  );
}
