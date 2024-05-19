import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-neutral-100">
        <div className="container grid md:grid-cols-2 gap-6 h-52 place-items-center p-4">
          <div className="w-full">
            <h3 className="font-bold text-3xl text-neutral-900 mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-neutral-500 font-normal text-sm">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2 ">
            <Input
              className="px-6 py-4"
              type="email"
              placeholder="Your email address"
            />
            <Button className="px-6 py-4" type="submit">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-4 ">
                <Image
                  src={"/Logo/LogoDark.png"}
                  alt="logo"
                  className=""
                  width={40}
                  height={40}
                />
                <span className="text-[20px] font-extrabold text-neutral-900 ">
                  Ecommerce
                </span>
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-neutral-500 sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <Image
                  src={"/Social icons/Vector-1.png"}
                  alt="icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <Image
                  src={"/Social icons/Vector-2.png"}
                  alt="icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <Image
                  src={"/Social icons/Vector-4.png"}
                  alt="icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
              <div className="text-center sm:text-left">
                <p className=" font-medium text-gray-900">Support</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Terms of use
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className=" font-medium text-gray-900">Company</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      About us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className=" font-medium text-gray-900">SHOP</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      My Account
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center ">
              <p className=" font-medium text-gray-900">ACCEPTED PAYMENTS</p>

              <div className="flex justify-center gap-8 items-center">
                <Image
                  src={"/Colored icons/Vector-1.png"}
                  className="object-contain grayscale mt-4"
                  alt="payment"
                  width={40}
                  height={20}
                />
                <Image
                  src={"/Colored icons/Vector-2.png"}
                  className="object-contain grayscale mt-4"
                  alt="payment"
                  width={40}
                  height={20}
                />
                <Image
                  src={"/Colored icons/Vector.png"}
                  className="object-contain grayscale mt-4"
                  alt="payment"
                  width={40}
                  height={20}
                />
              </div>
            </div>
          </div>
          <p className="text-center pb-6 text-neutral-500 text-sm pt-16">
            © 2024 Ecommerce. All rights reserved. Created by Moknine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
