"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BreadCrumb from "@/components/util/Breadcrumb";
import Image from "next/image";
import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import GridProduct from "@/components/util/Grid";
import { products } from "@/components/shared/Home/BestSelling";
import SortSelect from "@/components/util/SortSelect";
import ReviewCard from "@/components/shared/ReviewCard";
import { ReviewPopover } from "@/components/util/ReviewPopover";
import { SharePopover } from "@/components/util/SharePopover";
const product = {
  id: 1,
  name: "Classic Monochrome Tees ",
  image: "/cover.png",
  price: 100,
  inStock: true,
  reviews: [
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 1,
      user: {
        name: "Daniel Smith",
        avatar: "",
      },
      starts: 3,
      date: "2015-01-01",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
  ],
};
const ProductDetails = () => {
  const [details, setDetails] = useState(true);
  const [sorted, setSorted] = useState("latest");
  const [reviwesCount, setReviewsCoun] = useState(5);
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [reviewPopover, setReviewPopover] = useState(false);

  const [selected, setSelected] = useState({
    color: "",
    quantity: 1,
    size: "S",
  });

  return (
    <section className="container pt-6 pb-28 relative">
      <BreadCrumb />
      {/* Product details */}
      <div className="grid md:grid-cols-2 gap-16 min-h-[570px]">
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
        <div className="flex flex-col space-y-6 md:space-y-8 pt-1">
          <div>
            <div className="w-full flex justify-between items-center">
              <h3 className="text-neutral-900 font-bold text-2xl mb-2">
                {product.name}
              </h3>
              <SharePopover />
            </div>
            <div className="flex items-center gap-6 ">
              <div className="flex items-center gap-6 rounded-full px-4 py-1.5 text-[10px] text-neutral-500 bg-neutral-100">
                <FaStar className="text-neutral-500" />
                <span>4.2--{product.reviews.length} Reviews</span>
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
            <Button
              onClick={() => setAddedToCart((prev) => !prev)}
              className={cn(
                "px-20 text-sm w-1/2",
                addedToCart && "bg-blue-700"
              )}
            >
              {addedToCart ? "Added" : "Add to cart"}
            </Button>
            <div className="border border-neutral-100 rounded flex justify-center items-center w-10 h-10">
              <Heart
                fill={liked ? "red" : "white"}
                onClick={() => setLiked((prev: boolean) => !prev)}
                size={20}
                className={cn(" cursor-pointer ")}
              />
            </div>
          </div>
          <p className="uppercase text-neutral-500 font-medium text-xs">
            — Free shipping on orders $100+
          </p>
        </div>
      </div>
      {/* Product Review and description */}
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

              <p className="flex items-center gap-6">
                <span className="font-bold text-3xl text-neutral-900">4.2</span>{" "}
                <span className="text-neutral-400 text-sm">
                  -- {product.reviews.length} Reveiws
                </span>
              </p>

              <ReviewPopover />

              <div>
                <div className="border-b-2 border-t-neutral-100 pb-2 mb-4 flex justify-end">
                  <SortSelect sorted={sorted} setSorted={setSorted} />
                </div>
                <div className="w-full h-[400px] px-6 overflow-y-auto">
                  {product.reviews.slice(0, reviwesCount).map((review) => (
                    <ReviewCard review={review} key={review.id} />
                  ))}
                  {/* <div> */}
                  {product.reviews.length >= reviwesCount && (
                    <Button
                      onClick={() => setReviewsCoun((prev) => prev + 5)}
                      className="w-fit block my-6 mx-auto"
                    >
                      Load more reviews
                    </Button>
                  )}
                  {/* </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similair Products */}
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
