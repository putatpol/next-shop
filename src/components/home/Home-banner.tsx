import Image from "next/image";
import picMan from "@images/pic-man.png";
import picWoman from "@images/pic-woman.png";

const HomeBanner = () => {
  return (
    <div className=" mb-40 flex items-center justify-center lg:h-auto">
      <div className="relative block w-screen">
        <div className="flex justify-center">
          <Image className="animate-slideUp" src={picMan} alt="Picture Man" />
          <Image
            className="animate-slideDown"
            src={picWoman}
            alt="Picture Woman"
          />
        </div>
        <div className="absolute left-1/2 top-2/3 z-20 -translate-x-1/2 -translate-y-1/4 text-center">
          <div className="flex flex-col items-center space-y-4 *:text-6xl *:sm:text-9xl">
            <h1 className="animate-slideRight self-start">DRESS</h1>
            <h1>YOUR</h1>
            <h1 className="animate-slideLeft self-end">STORY</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
