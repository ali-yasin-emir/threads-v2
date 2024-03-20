import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
const Rightbar = () => {
  return (
    <div className="w-2/12 max-md:hidden fixed right-0 top-0 h-screen bg-gray-900 text-white px-12 flex flex-col items-center gap-8 pt-40 max-lg:px-2">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-white font-bold tracking-wider max-lg:text-sm max-lg:text-center">
          Suggested Communities
        </h1>
        <div className="flex flex-col gap-6 w-full max-lg:items-center">
          <Link
            href="/"
            className="flex justify-between items-center px-4 py-2 shadow-xl bg-gray-800 rounded-xl  max-xl:w-full max-md:px-2 max-lg:w-fit"
          >
            <div className="flex items-center gap-2">
              <Image
                className="object-contain rounded-full size-12"
                src={logo}
                alt="asd"
              />
              <div className="max-xl:hidden flex flex-col gap-1">
                <h1 className="text-white font-semibold text-xs">Name</h1>
                <p className="text-gray-300 text-xs">@username</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-white font-bold tracking-wider max-lg:text-sm max-lg:text-center">
          Similar Minds
        </h1>
        <div className="flex flex-col gap-6 w-full max-lg:items-center">
          <Link
            href="/"
            className="flex justify-between items-center px-4 py-2 shadow-xl bg-gray-800 rounded-xl  max-xl:w-full max-md:px-2 max-lg:w-fit"
          >
            <div className="flex items-center gap-2">
              <Image
                className="object-contain rounded-full size-12"
                src={logo}
                alt="asd"
              />
              <div className="max-xl:hidden flex flex-col gap-1">
                <h1 className="text-white font-semibold text-xs">Name</h1>
                <p className="text-gray-300 text-xs">@username</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
