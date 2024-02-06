import HeadMenu from "@/components/salamineira/HeadMenu"
import MenuReurb from "@/components/reurb/MenuReurb"
import CadastroRequente from "@/components/reurb/CadastroRequente"

export default function Requerente() {
    return (
        <>
        <HeadMenu />
        <div className="flex">
            <MenuReurb />
            <CadastroRequente />
        </div>
        </>
    )
}