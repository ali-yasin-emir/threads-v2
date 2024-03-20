import React from "react";
import { navLinks } from "/constants";
import Link from "next/link";

const Bottombar = () => {
  return (
    <div className="fixed  items-center justify-around bottom-0 w-full h-20 bg-red-700 text-white max-md:flex hidden">
      {navLinks.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.label}
            className=" hover:bg-red-400 flex items-center justify-center w-full h-full"
          >
            <link.icon className="size-8" />
          </Link>
        );
      })}
    </div>
  );
};

export default Bottombar;
