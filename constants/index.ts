import { FaHome } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiImageEditFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

export const navLinks = [
  {
    icon: FaHome,
    label: "Home",
    path: "/",
  },
  {
    icon: IoSearchOutline,
    label: "Search",
    path: "/search",
  },
  {
    icon: CiHeart,
    label: "Activity",
    path: "/activity",
  },
  {
    icon: RiImageEditFill,
    label: "Create Thread",
    path: "/create-thread",
  },
  {
    icon: MdGroups,
    label: "Communities",
    path: "/communities",
  },
  {
    icon: IoPerson,
    label: "Profile",
    path: "/profile",
  },
];
