"use client"
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin , FaFacebook, FaInstagram , FaTwitter  } from "react-icons/fa";


const Banner = () => {
    return (
        <div id="#" className="grid grid-cols-1 my-10 items-center lg:grid-cols-2 gap-10">
            <div className="order-2 lg:order-1">
                <p className="font-semibold text-lg">Hi I am </p>
                <h6 className="font-semibold text-xl my-3 text-[#FD6F00]">Muhammad Umair</h6>
                <h1 className="font-bold text-5xl">UI & UX  </h1>
                <h1 className="font-bold mb-3 lg:ml-32 text-5xl">Designer</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Link href="#contact" className="btn mt-5 bg-[#FD6F00] text-white">Hire Me</Link>
            </div>
           <div className="relative order-1 lg:order-2">
           <Image width="500" height="400" src="/assets/Group 2.png" alt="BannerImage" className="max-w-[450px] w-full mx-auto" />
           <Image width="400" className="absolute top-[14%] h-[80px] max-w-[370px] w-full left-1/2 -translate-x-1/2" height="50" src="/assets/Rectangle 4.png" alt="logo" />
           <div className="grid max-w-[100px] mx-auto mt-4 grid-flow-col gap-4">
            <Link href="/">
            <FaFacebook className="text-xl" />
            </Link>
            <Link href="/">
            <FaTwitter className="text-xl" />
            </Link>
            <Link href="/">
            <FaInstagram className="text-xl" />
            </Link>
            <Link href="/">
            <FaLinkedin className="text-xl" />
            </Link>
          </div>
           </div>
        </div>
    );
};

export default Banner;