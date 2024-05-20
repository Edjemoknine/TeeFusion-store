import React from "react";
import ProductCard from "../ProductCard";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import GridProduct from "@/components/util/Grid";
export const products = [
  {
    id: 1,
    name: "Classic Monochrome Tees ",
    image: "/cover.png",
    price: 100,
    inStock: true,
  },
  {
    id: 1,
    name: "UTRAANET Black",
    image: "/cover-1.png",
    price: 72,
    inStock: true,
  },
  {
    id: 1,
    name: "Essential Neutrals ",
    image: "/cover-2.png",
    price: 50,
    inStock: true,
  },
  {
    id: 1,
    name: "Monochromatic Wardrobe",
    image: "/over.png",
    price: 43,
    inStock: true,
  },
];
const BestSelling = () => {
  return (
    <>
      <div className="min-h-screen grid place-items-center pt-28">
        <div>
          <p className="text-neutral-300 uppercase text-center text-sm">
            Shop Now
          </p>
          <h2 className="font-bold text-3xl text-neutral-900 text-center mb-10">
            Best Selling
          </h2>
        </div>
        <GridProduct products={products} />
      </div>
      <div className="h-[304px] bg-gradient-to-r from-neutral-100 my-28">
        <div className="container flex justify-between">
          <div className="flex flex-col gap-6 justify-center items-start">
            <h3 className="font-bold text-neutral-900 text-3xl">
              Browse Our Fashion Paradise!
            </h3>
            <p className="max-w-[460px] text-sm text-neutral-500">
              Step into a world of style and explore our diverse collection of
              clothing categories.
            </p>
            <Button>
              Start Browsing <IoIosArrowRoundForward />
            </Button>
          </div>
          <div>
            <Image
              src={"/Category.png"}
              alt="feature"
              width={230}
              height={310}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center pb-28">
        <div className="text-neutral-500  flex items-center gap-6 pb-16 text-sm">
          <span className="hover:bg-neutral-100 focus:bg-neutral-100 text-neutral-800  active:bg-neutral-100 border transition-colors px-3 py-1 rounded-full">
            Featured
          </span>
          <span className="hover:bg-neutral-100 transition-colors px-3 py-1 rounded-full">
            Latest
          </span>
        </div>
        <GridProduct products={products} />
      </div>
    </>
  );
};

export default BestSelling;
