import Image from "next/image";

import logo from "/public/logo.png";
import { UserButton } from "@clerk/nextjs";

const Topbar = () => {
  return (
    <div className="z-20 fixed left-0 top-0 w-full h-24 bg-red-700 text-white px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          className="object-contain"
          src={logo}
          width={80}
          height={80}
          alt="logo_img"
        />
        <h1 className="text-2xl font-bold tracking-wide">Threads v2</h1>
      </div>
      <div className="pe-48 max-md:p-0">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Topbar;
