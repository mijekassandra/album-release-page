import { FaApple, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import { FaSpotify, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="py-12 border-y border-white">
        <section className="flex flex-col gap-10 lg:flex-row justify-between">
          <div className="flex flex-1 flex-col gap-1">
            <h4 className="footer-link">About monstercat</h4>
            <h4 className="footer-link">Contact Us</h4>
            <h4 className="footer-link">Careers</h4>
            <h4 className="footer-link">News</h4>
            <h4 className="footer-link">Press</h4>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <h4 className="footer-link">Terms of Service</h4>
            <h4 className="footer-link">Privacy Policy</h4>
          </div>
          <div className="flex flex-1 flex-col gap-4 justify-between">
            <h4 className="text-h6 uppercase text-white/40">Monstercat News</h4>
            <p className="text-md font-medium italic tracking-wider text-white/70 ">
              Don't miss a thing, stay up to date with the latest news from us.
            </p>
            <div className="flex flex-row gap-1 w-full py-2 border-b border-white/50">
              <input
                type="text"
                placeholder="Enter email"
                className="flex flex-1 bg-transparent text-lg font-montserrat text-white outline-none focus:outline-none"
              />
              <button className="text-white text-2xl px-5 py-1 hover:bg-white hover:text-black">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-6 items-center lg:flex-row lg:justify-between py-6">
        <p className="text-md flex-1 text-center lg:text-left font-medium italic tracking-wider text-white/70 ">
          2011 - 2025 © Monstercat, All Rights Reserved
        </p>
        <div className="flex gap-5">
          <div className="relative group">
            <FaYoutube className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Youtube
            </span>
          </div>
          <div className="relative group">
            <FaInstagram className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Instagram
            </span>
          </div>
          <div className="relative group">
            <FaTiktok className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              TikTok
            </span>
          </div>
          <div className="relative group">
            <FaTwitter className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Twitter
            </span>
          </div>
          <div className="relative group">
            <FaSpotify className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Spotify
            </span>
          </div>
          <div className="relative group">
            <FaApple className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Apple Music
            </span>
          </div>
          <div className="relative group">
            <FaTwitch className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Twitch
            </span>
          </div>
          <div className="relative group">
            <FaFacebook className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Facebook
            </span>
          </div>
          <div className="relative group">
            <FaDiscord className="icon-platforms" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded">
              Discord
            </span>
          </div>
        </div>
      </div>
      <div className="flex text-center justify-center items-center italic text-[11px] text-white/70  py-12">
        <p className="w-full lg:w-[60%] tracking-wider">
          We acknowledge with gratitude the traditional, ancestral and unceded
          land of the Coast Salish peoples, including the territories of the
          Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
          (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
          Monstercat's Vancouver HQ stands.
          <br />
          <br />
          We acknowledge the unceded and ancestral territories of the
          Gabrielino/Tongva peoples on which our LA team live and work.
        </p>
      </div>
      <div className="border-t border-white/20 p-6 w-full">
        <p className="text-white/50 text-xs tracking-wider text-center">
          Disclaimer: This is a practice project created to enhance frontend
          development skills. This is not the official Monstercat website and is
          intended for educational purposes only. All rights belong to their
          respective owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
