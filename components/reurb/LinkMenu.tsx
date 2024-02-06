import Link from "next/link";
import React from "react";

export default function LinkMenuReurb(props: {
  linkAcesso: string;
  textoLink: string;
  icone: any;
}) {
  return (
    <>
      <Link href={props.linkAcesso}>
        <li className="flex items-center gap-2 p-1 w-full transition duration-150 ease-out md:ease-in hover:bg-slate-500 hover:text-yellow-50">
          {props.icone}
          <p>{props.textoLink}</p>
        </li>
      </Link>
    </>
  );
}
