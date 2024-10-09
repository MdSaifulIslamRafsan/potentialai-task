"use client"
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin , FaFacebook, FaInstagram , FaTwitter  } from "react-icons/fa";

const Footer = () => {
    return (
    <div>
        <div className="footer footer-center text-base-content rounded p-10">
            
        <Link href="/"><Image width="140" height="40" src="/assets/logo (1).png" alt="logo" /></Link>
        <nav className="flex flex-wrap gap-4">
          <Link href="#" className="link link-hover">Home</Link>
          <Link href="#about" className="link link-hover">About me</Link>
          <Link href="#services" className="link link-hover">Services</Link>
          <Link href="#projects" className="link link-hover">Projects</Link>
          <Link href="#testimonials" className="link link-hover">Testimonials</Link>
          <Link href="#contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
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
        </nav>
      </div>
        <aside className="py-5 bg-[#121212] text-white text-center">
          <p>© {new Date().getFullYear()} <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved , Inc.</p>
        </aside>
    </div>
    );
};

export default Footer;