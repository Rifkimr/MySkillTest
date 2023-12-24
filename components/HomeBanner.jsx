import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-500 to-green-700 mb-8">
      <div className="mx-auto py-12 flex flex-col gap-2 md:flex-row justify-evenly items-center">
        <div className="mb-8 md:mb-0 text-center ">
          <p className="text-lg md:text-xl text-white mb-4">
            Hallo Nama Saya... 
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Rifki Muhamad Ramdan
          </h1>
          <p className="text-2xl md:text-5xl font-bold text-yellow-400 ">
            Frondtend Web Develover
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <img
            src="/banner.png"
            alt="banner Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
