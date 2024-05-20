import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
const links = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <nav className="container ">
      <div className=" border-b border-neutral-100 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src={"/Logo/logolight.png"}
            alt="logo"
            className=""
            width={40}
            height={40}
          />
          <span className="text-[20px] font-extrabold text-neutral-900 ">
            Ecommerce
          </span>
        </div>
        <div className="flex space-x-8 text-sm">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-8 items-center">
          <Search />
          <Link href={"/cart"}>
            <PiShoppingCart size={18} />
          </Link>
          <Link href={"/profile"}>
            <FaRegCircleUser size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
