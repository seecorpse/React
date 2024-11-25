import { IoHomeOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCollections } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

export const routes = [
  {
    title: "Strona Główna",
    href: "/",
    Icon: IoHomeOutline,
  },
  {
    title: "Oferta",
    href: "/Offer",
    Icon: IoCarOutline
  },
  {
    title: "Cennik",
    href: "/Price",
    Icon: IoPricetagsOutline
  },
  {
    title: "Nasze realizacje",
    href: "/#OurProjects",
    Icon: MdOutlineCollections
  },
  {
    title: "Kontakt",
    href: "/#Contact",
    Icon: IoMailOutline
  },
  {
    title: "Oceń nas",
    href: "https://g.page/r/CUC7AxOVORLNEAE/review",
    Icon: IoHeartOutline
  },
];
