import { FaHome } from "react-icons/fa";
import { TbIrregularPolyhedronPlus } from "react-icons/tb";
import { IoIosAlert } from "react-icons/io";
import { MdContactless } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa6";

import Link from "next/link";
export default function MenuPrincipal() {
  return (
    <div className="m-auto">
        <nav className="flex justify-center gap-3 text-center text-white text-lg">
          <Link href={"/"} className="flex">
            <li className="flex items-center gap-1">
              <FaHome />
              Inicio
            </li>
          </Link>
          <Link href={"/rede"} className="flex">
            <li className="flex items-center gap-1">
            <FaNetworkWired />
              Rede
            </li>
          </Link>
          <Link href={"/reurb"} className="flex">
            <li className="flex items-center gap-1">
            <TbIrregularPolyhedronPlus />
              Reurb
            </li>
          </Link>
          <Link href={"/sobre"} className="flex">
            <li className="flex items-center gap-1">
            <IoIosAlert />
              Sobre
            </li>
          </Link>
          <Link href={"/"} className="flex">
            <li className="flex items-center gap-1">
            <MdContactless />
              Contato
            </li>
          </Link>
        </nav>
    </div>
  );
}
