
import MenuTop from "./MenuTop";
import MenuPrincipal from "./MenuPrincipal";

import Link from "next/link";
export default function MenuCorpoTopo() {
  return (
    <div className=" w-full">
      <div className="flex h-70 p-1 gap-2">
      
      </div>
      <div className="bg-orange-500">
        <MenuPrincipal />
      </div>
    </div>
  );
  //width={970} height={90}
}
