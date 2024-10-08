import Image from "next/image";
import logo from "@/assets/images/logo/Frame-3942.png";
import Link from "next/link";
import { TfiLineDashed } from "react-icons/tfi";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-center justify-items-center py-10 md:py-20 bg-offWhite">
        <Link href={"/"} className="max-w-[160px] m-auto md:hidden">
          <Image className="w-full" src={logo} alt="" priority />
        </Link>
        <div className="text-center">
          <h4 className="titleFont tracking-widest text-3xl font-bold">
            Follow Us
          </h4>
          <div className="py-4 flex justify-center gap-1 text-xl text-secondary">
            <FaFacebookF /> <TfiLineDashed /> <FaInstagram /> <TfiLineDashed />
            <FaYoutube />
            <TfiLineDashed />
            <FaLinkedinIn />
          </div>
          <p className="text-secondary">Solene@qodeinteractive.com</p>
        </div>
        <Link href={"/"} className="max-w-[160px] m-auto hidden md:block">
          <Image className="w-full" src={logo} alt="" priority />
        </Link>
        <div className="text-center border-b border-catSkillWhite">
          <h4 className="titleFont tracking-widest text-3xl font-bold">
            NEWSLETTER
          </h4>
          <p className="text-secondary py-4">Follow our latest stories.</p>
          <input
            className="focus:outline-none bg-offWhite"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="bg-catSkillWhite text-secondary flex justify-center items-center py-4">
        <p>© 2020 Qode Interactive, All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
