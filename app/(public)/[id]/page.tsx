"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BreadCrumb from "@/components/util/Breadcrumb";
import Image from "next/image";
import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import { CiShare2, CiHeart } from "react-icons/ci";
import { cn } from "@/lib/utils";
import GridProduct from "@/components/util/Grid";
import { products } from "@/components/shared/Home/BestSelling";
const product = {
  id: 1,
  name: "Classic Monochrome Tees ",
  image: "/cover.png",
  price: 100,
  inStock: true,
  reviews: 54,
};
const ProductDetails = () => {
  const [details, setDetails] = useState(true);
  const [selected, setSelected] = useState({
    color: "",
    quantity: 1,
    size: "S",
  });

  return (
    <section className="container pt-6 pb-28">
      <BreadCrumb />
      <div className="grid grid-cols-2 gap-16 h-[570px]">
        <div className="bg-neutral-100 rounded flex justify-center items-center">
          <Image
            src={product.image}
            alt="Product Image"
            width={388}
            height={404}
            className="object-contain"
          />
        </div>
        {/* Details Info */}
        <div className="flex flex-col space-y-6 pt-1">
          <div>
            <div className="w-full flex justify-between items-center">
              <h3 className="text-neutral-900 font-bold text-2xl mb-2">
                {product.name}
              </h3>
              <CiShare2 size={24} className="text-neutral-500 cursor-pointer" />
            </div>
            <div className="flex items-center gap-6 ">
              <div className="flex items-center gap-6 rounded-full px-4 py-1.5 text-[10px] text-neutral-500 bg-neutral-100">
                <FaStar className="text-neutral-500" />
                <span>4.2--{product.reviews} Reviews</span>
              </div>
              <p className="text-gray-500 border text-[10px] rounded-full px-3 py-1 font-medium ">
                {product.inStock ? "IN STOCK" : "LIMITED"}
              </p>
            </div>
          </div>

          <h4 className="text-neutral-900 text-lg font-semibold">
            ${product.price}.00
          </h4>
          <div>
            <p className="uppercase text-neutral-500 font-medium text-xs mb-3">
              AVAILABLE COLORS
            </p>
            <div className="flex items-center gap-6">
              <span className="h-7 cursor-pointer w-7 active:border-2 border-neutral-900 rounded-full focus:ring focus:ring-neutral-900 hover:ring bg-blue-400" />
              <span className="h-7 cursor-pointer w-7 rounded-full focus:ring focus:ring-neutral-900 hover:ring bg-yellow-400" />
              <span className="h-7 cursor-pointer w-7 rounded-full focus:ring focus:ring-neutral-900 hover:ring bg-green-400" />
            </div>
          </div>
          <div>
            <p className="uppercase text-neutral-500 font-medium text-xs mb-3">
              SELECT SIZE
            </p>
            <div className="flex items-center gap-3">
              <span className="h-[32px] border border-neutral-100 p-2 rounded flex justify-center items-center cursor-pointer hover:bg-neutral-50 text-sm w-[40px] focus:ring-1 ring-neutral-900">
                S
              </span>
              <span className="h-[32px] border border-neutral-100 p-2 rounded flex justify-center items-center cursor-pointer hover:bg-neutral-50 text-sm w-[40px] focus:ring-1 ring-neutral-900">
                M
              </span>
              <span className="h-[32px] border border-neutral-100 p-2 rounded flex justify-center items-center cursor-pointer hover:bg-neutral-50 text-sm w-[40px] focus:ring-1 ring-neutral-900">
                X
              </span>
              <span className="h-[32px] border border-neutral-100 p-2 rounded flex justify-center items-center cursor-pointer hover:bg-neutral-50 text-sm w-[40px] focus:ring-1 ring-neutral-900">
                XL
              </span>
              <span className="h-[32px] border border-neutral-100 p-2 rounded flex justify-center items-center cursor-pointer hover:bg-neutral-50 text-sm w-[40px] focus:ring-1 ring-neutral-900">
                XXL
              </span>
            </div>
          </div>
          <div>
            <p className="uppercase text-neutral-500 mb-3 font-medium text-xs">
              QUANTITY
            </p>
            <div className="border border-neutral-100 rounded flex items-center justify-start w-fit">
              <span className="p-2 font-semibold text-neutral-900 text-center w-[40px]">
                -
              </span>
              <Input
                className="p-2 font-semibold text-neutral-900 text-center border-none shadow-none w-[40px]"
                type="number"
                required
                min={1}
                value={1}
              />
              <span className="p-2 font-semibold text-neutral-900 text-center w-[40px]">
                +
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button className="px-20 text-sm w-1/2">Add to cart</Button>
            <div className="border border-neutral-100 rounded flex justify-center items-center w-10 h-10">
              <CiHeart size={20} className=" cursor-pointer " />
            </div>
          </div>
          <p className="uppercase text-neutral-500 font-medium text-xs">
            — Free shipping on orders $100+
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-28">
        <div className="col-span-1 mt-8 flex md:flex-col gap-6">
          <Button
            onClick={() => setDetails((prev) => !prev)}
            className={cn(
              "hover:bg-neutral-100 bg-transparent duration-300 w-full text-neutral-400",
              details && "bg-neutral-100 text-neutral-800"
            )}
          >
            ... Details
          </Button>
          <Button
            onClick={() => setDetails((prev) => !prev)}
            className={cn(
              "hover:bg-neutral-100 bg-transparent gap-3 duration-300 w-full text-neutral-400 flex items-center",
              !details && "bg-neutral-100 text-neutral-800"
            )}
          >
            <FaStar /> Reviews
          </Button>
        </div>
        <div className="col-span-3">
          {details ? (
            <div className="flex flex-col space-y-6">
              <h4 className="text-neutral-900 font-semibold ">Deatils</h4>
              <p className="text-sm text-neutral-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, consequuntur. Sunt ipsam ea quibusdam! Vero, sed
                architecto, quasi quam autem repellat dolorem quos modi
                consequatur sequi deserunt qui voluptatem rerum.
              </p>
              <ul className="list-disc text-sm text-neutral-500">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col space-y-6">
              <h4 className="text-neutral-900 font-semibold ">Reviews</h4>
            </div>
          )}
        </div>
      </div>
      <div className=" pt-28">
        <h4 className="text-neutral-900 font-bold text-2xl">
          You might also like
        </h4>

        <p className="text-neutral-300  mb-16 mt-2  uppercase text-sm">
          SIMILAR PRODUCTS
        </p>
        <GridProduct products={products} />
      </div>
    </section>
  );
};

export default ProductDetails;
