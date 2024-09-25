"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Search from "./Search";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import Navigation from "./nav";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import BreadCrumb from "../util/Breadcrumb";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
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
              TeeFusion
            </span>
          </div>
          <div className="hidden md:block">
            <Navigation />
          </div>
          <div className="flex gap-8 items-center">
            <Search />
            <Link href={"/cart"}>
              <PiShoppingCart size={18} />
            </Link>
            <Link href={"/profile"}>
              <FaRegCircleUser size={18} />
            </Link>
            <Menu
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden flex cursor-pointer"
            />
            <MobileNav openNav={open} setOpenNav={setOpen} />
          </div>
        </div>
      </nav>
      {pathname !== "/" && <BreadCrumb />}
    </>
  );
};

export default Header;
