import styles from "./menuLateral.module.css"
import Image from "next/image";
import logoTopo from "@/public/logo-sala-mineira-do-empreendedor-de-lagoa-dos-patos-mg.png";
import anuncio1 from "@/public/banner-lauro.gif";
import anuncio2 from "@/public/novo-anuncio.webp";
import Link from "next/link";
import logoFuturo from "@/public/img/futuro-consultoria-horizonte.webp"
export default function MenuLateral() {
    const menu = [
        {
            title: "Inicio",
            rota: "/"
        },
        {
            title: "Cadastros",
            rota: "/cadastros"
        },
        {
            title: "Emissão",
            rota: "/emissao"
        },
        {
            title: "Configuração",
            rota: "/configuracao"
        },
        {
            title: "Teste",
            rota: "/teste"
        },
        {
            title: "Imprimir",
            rota: "/imprimir"
        }
    ]
    return (
        <div className={styles.container}>
            <Link href="/" className="w-full m-auto">
                <Image src={logoFuturo} width={350} height={90} alt="Logo Sala Mineira Do Empreendedor de Lagoa dos Patos MG" />
            </Link>
            <nav>
                {menu.map((m) => (
                    <li key={m.title}><Link href={m.rota}>{m.title}</Link></li>
                ))
                }

            </nav>
        </div>
    )
}