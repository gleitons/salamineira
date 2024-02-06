import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeadMenu from "@/components/salamineira/HeadMenu";
import MenuLateral from "@/components/menus/MenuLateral";
import Ads from "@/components/Ads";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sala Mineira do Empreendedor de Lagoa dos Patos MG",
  description: "Inicio - Sala Mineira do Empreendedor de Lagoa dos Patos MG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="menuLateral">
          <MenuLateral />
          <div className="Apresentacao">
            <Ads />
            <HeadMenu />
            <div className="corpo">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
