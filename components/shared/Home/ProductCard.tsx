import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ShoppingIcon from "@/public/Icons/Shopping";
import Image from "next/image";
import React from "react";

import { CiHeart } from "react-icons/ci";
type ProductProps = {
  product: any;
};
const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="group transition-all">
      <div className="h-[310px] w-[270px] bg-neutral-100 rounded  transition-all duration-300 relative">
        <div className="h-full w-full  flex justify-center group-hover:opacity-50 transition-opacity duration-300">
          <Image
            src={product.image}
            alt={product.name}
            width={270}
            height={250}
            className="object-contain"
          />
        </div>
        <CiHeart
          size={20}
          className="hidden cursor-pointer group-hover:block group-hover:absolute top-4 right-4"
        />
        <Button className=" items-center hidden group-hover:flex duration-300  gap-6 absolute bottom-0 w-full rounded-t-none z-10">
          Add to cart <ShoppingIcon size={20} />
        </Button>
      </div>
      <div className="mt-6">
        <h3 className=" font-semibold">{product.name}</h3>
        <div className="flex items-center space-x-6 text-xs mt-3">
          <p className="text-gray-500 border rounded-full px-3 py-1 font-medium text-xs">
            {product.inStock ? "IN STOCK" : "LIMITED"}
          </p>
          <p className="text-gray-500">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
