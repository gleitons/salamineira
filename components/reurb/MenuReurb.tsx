import { IoHome } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import Link from "next/link";
import LinkMenuReurb from "./LinkMenu";
import SeparadorMenu from "./SeparadorTitulo";
export default function MenuReurb() {
  return (
    <div className="w-80 bg-slate-400">
      <div>
        <IoHome />
        <p>REURB LDP</p>
      </div>
      <nav>
        <ul >
            <LinkMenuReurb linkAcesso="./" icone={<ImHome />} textoLink="Home" />

            <SeparadorMenu titulo="Cadastro" />           
            <LinkMenuReurb linkAcesso="/reurb/nucleo" icone={<ImHome />} textoLink="Núcleo Urbano" />
            <LinkMenuReurb linkAcesso="/reurb/requerente" icone={<ImHome />} textoLink="Requerentes" />
            <LinkMenuReurb linkAcesso="/reurb/cadastro-pessoal" icone={<ImHome />} textoLink="Confrontantes" />



          

          

          
          
          
          <Link href="./reurb/cadastro-pessoal">
            <li>Ocupantes</li>
          </Link>
          <Link href="./reurb/cadastro-pessoal">
            <li>Notificações</li>
          </Link>
          <Link href="./reurb/cadastro-pessoal">
            <li>Anexar Documentação</li>
          </Link>
          <Link href="./reurb/cadastro-pessoal">
            <li>Socieconômico</li>
          </Link>
          <Link href="./reurb/cadastro-pessoal">
            <li>Proprietario Tabulado</li>
          </Link>
          <Link href="./reurb/cadastro-pessoal">
            <li>Cadastrar Imovél</li>
          </Link>

          <p className="italic text-xs">Procedimento</p>

          <Link href="./reurb/procedimentos">
            <li>Vincular</li>
          </Link>

          <p className="italic text-xs">Gerador de Documentos</p>
          <Link href="./reurb/procedimentos">
            <li>Requerimento</li>
            <li>Notificação</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
