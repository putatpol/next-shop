import Image from "next/image";
import picMan from "@images/pic-man.png";
import picWoman from "@images/pic-woman.png";

const HomeBanner = () => {
  return (
    <div className="mt-10 block">
      <div className="relative flex justify-center">
        <div className="relative">
          <Image
            className="relative translate-x-8 opacity-70"
            src={picMan}
            alt="Picture Man"
          />
        </div>
        <div className="relative">
          <Image
            className="relative -translate-x-8 translate-y-20 opacity-70"
            src={picWoman}
            alt="Picture Woman"
          />
        </div>
      </div>
      <div className="relative z-50 -translate-y-72 text-center">
        <div className="flex flex-col items-center space-y-4 *:text-9xl">
          <h1 className="self-start pl-60">DRESS</h1>
          <h1>YOUR</h1>
          <h1 className="self-end pr-60">STORY</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
