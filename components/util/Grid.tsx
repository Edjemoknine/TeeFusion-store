import React from "react";
import ProductCard from "../shared/Home/ProductCard";

const GridProduct = ({ products }: { products: any }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product: any) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default GridProduct;
