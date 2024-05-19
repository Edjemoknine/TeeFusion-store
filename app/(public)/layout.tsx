import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React, { ReactNode } from "react";

const Publayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="text-center text-neutral-50 bg-neutral-900 h-10 grid place-items-center text-sm">
        <p>Get 25% OFF on your first order. Order Now</p>
      </div>
      <div className="">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Publayout;
