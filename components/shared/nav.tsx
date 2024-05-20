import Link from "next/link";
import React from "react";
const links = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const Navigation = () => {
  return (
    <div className="flex items-center flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 text-sm">
      {links.map((link) => (
        <Link href={link.href} key={link.label}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
