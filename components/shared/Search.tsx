"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";

function Search() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <FaSearch
        onClick={() => setOpenSearch((prev) => !prev)}
        size={16}
        className="cursor-pointer lg:hidden"
      />
      <div
        className={cn(
          "absolute  left-1/2 lg:top-0 lg:left-0 lg:relative lg:translate-x-0 -translate-x-1/2 duration-300",
          openSearch ? "top-32 " : "-top-full "
        )}
      >
        <div className="relative">
          <FaSearch
            size={16}
            className="absolute top-1/2 text-neutral-500 left-3 -translate-y-1/2"
          />
          <Input
            type="email"
            placeholder="Search products"
            className="pl-10 placeholder:text-xs placeholder:text-neutral-500"
          />
        </div>
      </div>
    </>
  );
}

export default Search;
