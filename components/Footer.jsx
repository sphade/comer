import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
  PhoneIncomingIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[100px] flex-col md:flex-row flex space-y-10 justify-between max-w-[1200px] w-full  px-[10px] md:px-[50px]">
      <div className="flex flex-col gap-5">
        <div>
          <Image
            src="/assets/logo-text-mobile.png"
            alt=""
            width={150}
            height={40}
          />
        </div>

        <p className="font-black">Say bye to buy, now rent on butterfly.</p>
        <div className="flex gap-5">
          <Image
            src="/assets/app-store-icon.svg"
            alt=""
            width={50}
            height={50}
          />
          <Image src="/assets/twitter-icon.svg" alt="" width={50} height={50} />
          <Image
            src="/assets/instagram-icon.svg"
            alt=""
            width={50}
            height={50}
          />
          <Image
            src="/assets/facebook-icon.svg"
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>

      <ul className=" text-gray-700 text-base flex flex-col gap-5 capitalize ">
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">FAQS</li>
        <li className="cursor-pointer">Terms and Conditions</li>
        <li className="cursor-pointer">Contact Us</li>
        <li className="cursor-pointer">Careers</li>
      </ul>

      <div className="space-y-5 text-gray-700 text-base">
        <h1 className="font-black text-2xl">Gent In Touch</h1>
        <p className="flex gap-2">
          {" "}
          <PhoneIcon className="h-5 w-5" />
          08073536765{" "}
        </p>
        <p className="flex gap-2">
          {" "}
          <MailIcon className="h-5 w-5" /> info@mauttefly.in
        </p>
        <p className="w-[250px] flex gap-2" >
          <LocationMarkerIcon className="h-5 w-32" />
          Gateway Plaza, 103, Central Ave, Hiranandani Gardens, Powai, Mumbai,
          Maharashtra 400076
        </p>
      </div>
    </div>
  );
};
export default Footer;
