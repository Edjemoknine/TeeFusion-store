import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React, { ReactNode } from "react";

const Publayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Publayout;
