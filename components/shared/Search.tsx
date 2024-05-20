import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
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
  );
}

export default Search;
