import { MdOutlineMenu } from "react-icons/md";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaTwitch,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="fixed bg-custom-black/50 md:bg-transparent py-2 top-0 left-0 right-0 z-50 flex md:py-6 px-[60px] gap-10 items-center justify-between ">
        <img
          src="/assets/monstercat.png"
          alt="monstercat-logo"
          className="w-12 h-12"
        />
        <div className="flex flex-1 flex-row-reverse items-center gap-28">
          <MdOutlineMenu className="text-custom-white" size={32} />

          {/* Floating Social Icons */}
          <div className="flex hidden gap-6 z-10 sm:flex md:grid md:fixed md:right-16 md:top-1/2 md:-translate-y-2/3">
            <FaInstagram className="text-white hover:text-white/60 cursor-pointer text-xl" />
            <FaTiktok className="text-white hover:text-white/60 cursor-pointer text-xl" />
            <FaTwitter className="text-white hover:text-white/60 cursor-pointer text-xl" />
            <FaTwitch className="text-white hover:text-white/60 cursor-pointer text-xl" />
            <FaFacebook className="text-white hover:text-white/60 cursor-pointer text-xl" />
            <FaDiscord className="text-white hover:text-white/60 cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
