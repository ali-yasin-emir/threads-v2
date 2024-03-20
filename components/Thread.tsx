import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import pp from "/public/logo.png";

const Thread = () => {
  return (
    <div className="flex flex-col justify-center p-12 gap-2 bg-stone-500 rounded-xl max-lg:p-6 max-md:p-3 max-md:text-sm">
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-between">
          <Image
            className="object-contain rounded-full max-md:size-48"
            src={pp}
            width={120}
            height={120}
            alt="img"
          />
          <hr className="w-[1px] h-[70px] bg-white max-md:hidden" />
        </div>
        <div className="flex flex-col justify-around max-md:gap-3 max-md:justify-center">
          <h1 className="pt-4 font-semibold tracking-wide">Maxwell</h1>
          <p className="text-gray-100 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            laudantium architecto ducimus itaque tempore impedit voluptatibus
            quisquam beatae. Autem, fuga?
          </p>
          <div className="flex gap-3">
            <FaRegHeart className="size-6 text-white cursor-pointer hover:text-red-600" />
            <FiMessageCircle className="size-6 text-white cursor-pointer hover:text-yellow-400" />
            <PiArrowBendUpRightBold className="size-6 text-white cursor-pointer hover:text-green-600" />
            <BiLogoTelegram className="size-6 text-white cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>

      <div className="ps-5 max-md:ps-1 mb-4">
        <div className="flex">
          <div className="flex relative">
            <Image
              className="object-contain rounded-full"
              src={pp}
              width={42}
              height={42}
              alt="img"
            />
            <Image
              className="object-contain rounded-full absolute left-3 top-0"
              src={pp}
              width={42}
              height={42}
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-1 text-sm text-gray-300">
        <span>1:25 PM</span>
        <span>-</span>
        <span>Jul 29, 2023</span>
        <span>-</span>
        <span>PixelPalace Community</span>
        <Image
          className="object-contain rounded-full"
          src={pp}
          width={24}
          height={24}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Thread;
