import React from "react";
import ProductCard from "../shared/ProductCard";

const GridProduct = ({ products }: { products: any }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product: any) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default GridProduct;
