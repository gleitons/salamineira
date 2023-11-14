import Image from "next/image"
import logoTopo from "@/public/logo-sala-mineira-do-empreendedor-de-lagoa-dos-patos-mg.png"
import anuncio1 from "@/public/banner-anuncio-site.jpeg"
import anuncio2 from "@/public/novo-anuncio.webp"
import MenuTop from "./MenuTop"
export default function MenuCorpoTopo() {
   
    
    return (
        <div className=" w-full">
            <div className="flex justify-between  border-2 border-rose-500">
                <Image src={logoTopo} alt="Logo Sala Mineira Do Empreendedor de Lagoa dos Patos MG" />
                <Image src={anuncio1} alt="Anuncio Especial" />
            </div>
            <div className="bg-orange-500">
                <MenuTop />
            </div>
        </div>
    )
}