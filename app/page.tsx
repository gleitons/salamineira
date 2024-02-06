import Link from "next/link";
import BotaoInicio from "@/components/BotaoInicio";

export default function Home() {
  return (
    <>
      <BotaoInicio link="/sobre" titulo="Sobre" />
    </>
  );
}
