import React from "react";
import { Button } from "../../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbTruck } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
const Hero = () => {
  return (
    <>
      <section className=" bg-neutral-100 h-[440px] overflow-hidden">
        <div className="container grid md:grid-cols-2 h-full">
          <div className="flex-col flex space-y-8 justify-center items-start  h-full">
            {" "}
            <h1 className="text-neutral-800 font-extrabold text-4xl">
              Fresh Arrivals Online
            </h1>
            <p className="text-neutral-600">
              Discover Our Newest Collection Today.
            </p>
            <Button>
              View Collection <IoIosArrowRoundForward />
            </Button>
          </div>
          <div className="relative h-full flex justify-center">
            <Image
              src={"/Ellipse.png"}
              alt="ellipse"
              width={400}
              height={400}
              className="object-contain absolute bottom-0"
            />
            <Image
              src={"/Hero.png"}
              alt="Hero"
              className="object-contain z-30 absolute bottom-0 "
              width={255}
              height={382}
            />
          </div>
        </div>
      </section>
      <div className="container grid md:grid-cols-3 sm:grid-cols-2 gap-10 mt-24">
        <div className=" space-y-4 ">
          <div className="size-[48px] bg-neutral-100 rounded-full flex justify-center items-center">
            <TbTruck size={20} className="" />
          </div>
          <h4 className="font-bold text-neutral-800">Free Shipping</h4>
          <p className="text-sm text-neutral-500 max-w-[272px]">
            Upgrade your style today and get FREE shipping on all orders! Dont
            miss out.
          </p>
        </div>
        <div className=" space-y-4 ">
          <div className="size-[48px] bg-neutral-100 rounded-full flex justify-center items-center">
            <LiaCertificateSolid size={20} className="" />
          </div>

          <h4 className="font-bold text-neutral-800">Satisfaction Guarantee</h4>
          <p className="text-sm text-neutral-500 max-w-[272px]">
            Shop confidently with our Satisfaction Guarantee: Love it or get a
            refund.
          </p>
        </div>
        <div className=" space-y-4 ">
          <div className="size-[48px] bg-neutral-100 rounded-full flex justify-center items-center">
            <IoShieldCheckmarkSharp size={20} className="" />
          </div>
          <h4 className="font-bold text-neutral-800">Secure Payment</h4>
          <p className="text-sm text-neutral-500 max-w-[272px]">
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
