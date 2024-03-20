"use client";

import React from "react";
import { navLinks } from "/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Leftbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-2/12 max-md:hidden h-screen fixed bg-gray-900 text-white flex flex-col items-center px-4">
      <div className="mt-40 flex flex-col gap-12">
        {navLinks.map((link) => {
          const isActive = link.path === pathname;
          return (
            <Link
              href={link.path}
              key={link.label}
              className={` ${
                isActive && "bg-gray-700"
              } flex items-center gap-6 px-4 py-2 rounded-lg lg:p-1`}
            >
              <link.icon className="size-8" />
              <span className="text-lg max-lg:hidden">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Leftbar;
