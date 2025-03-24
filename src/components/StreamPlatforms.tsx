import {
  FaHeadphonesSimple,
  FaBandcamp,
  FaSoundcloud,
  FaApple,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";

const StreamPlatforms = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <h2 className="heading-font">Stream it Your Way</h2>

      <div className="flex flex-wrap items-center justify-center w-full lg:justify-start">
        <div className="flex flex-wrap items-center border border-white w-fit">
          {/* Player button with text */}
          <div className="flex items-center gap-2 py-2 px-3 gap-3 md:py-5 md:px-6 ">
            <FaHeadphonesSimple className="text-xl text-custom-white" />
            <p className="font-bold uppercase text-sm md:text-base">PLAYER</p>
          </div>

          {/* Other platform buttons */}
          <div className="flex flex-wrap">
            <div className="relative group p-3 md:p-6 border border-white">
              <FaBandcamp className="icon-platforms " />
              <span className="absolute uppercase font-monument text-xs tracking-wider -top-3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[100%] after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white z-10">
                Stream on Bandcamp
              </span>
            </div>
            <div className="relative group p-3 md:p-6 border border-white">
              <FaSoundcloud className="icon-platforms" />
              <span className="absolute uppercase font-monument text-xs tracking-wider -top-3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[100%] after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white z-10">
                Stream on Soundcloud
              </span>
            </div>
            <div className="relative group p-3 md:p-6 border border-white">
              <FaApple className="icon-platforms" />
              <span className="absolute uppercase font-monument text-xs tracking-wider -top-3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[100%] after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white z-10">
                Stream on Apple Music
              </span>
            </div>
            <div className="relative group p-3 md:p-6 border border-white">
              <FaYoutube className="icon-platforms" />
              <span className="absolute uppercase font-monument text-xs tracking-wider -top-3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[100%] after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white z-10">
                Stream on Youtube
              </span>
            </div>
            <div className="relative group p-3 md:p-6 border border-white">
              <FaSpotify className="icon-platforms" />
              <span className="absolute uppercase font-monument text-xs tracking-wider -top-3 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[100%] after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white z-10">
                Stream on Spotify
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StreamPlatforms;
