import Link from "next/link";
import HeadMenu from "../components/salamineira/HeadMenu";
import BotaoInicio from "@/components/BotaoInicio";

export default function Home() {
  return (
    <>
      <HeadMenu />
      <BotaoInicio link="/sobre" titulo="Sobre" />
    </>
  );
}
