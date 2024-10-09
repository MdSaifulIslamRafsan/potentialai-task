"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const activeRoute = usePathname();
    const navItems = [
        {
            path: '#',
            title: "Home"
        },
        {
            path: '#about',
            title: "About Me"
        },
        {
            path: '#services',
            title: "Services"
        },
        {
            path: '#projects',
            title: "Projects"
        },
        {
            path: '#testimonials',
            title: "Testimonials"
        },
        {
            path: '#contact',
            title: "Contact"
        },
    ]
    return (
        <div className="navbar max-w-[1420px] lg:w-10/12 w-[95%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
               navItems?.map((item) => <li key="title"><Link  className={item?.path === activeRoute ? "text-[#FD6F00]" : ""} href={item?.path}>{item?.title}</Link></li>)
            }
      </ul>
    </div>
    <Link href="/"><Image width="140" height="40" src="/assets/logo (1).png" alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
            {
               navItems?.map((item) => <li key="title"><Link  className={item?.path === activeRoute ? "text-[#FD6F00]" : ""} href={item?.path}>{item?.title}</Link></li>)
            }
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/" className="btn bg-[#FD6F00] text-white">Downlaod CV</Link>
  </div>
</div>
    );
};

export default Navbar;