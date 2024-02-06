import HeadMenu from "@/components/salamineira/HeadMenu"
import MenuReurb from "@/components/reurb/MenuReurb"
import CadastroNucleoUrbano from "@/components/reurb/CadastroNucleoUrbano"

export default function Nucleo() {
    return (
        <>
        <HeadMenu />
        <div className="flex">
            <MenuReurb />
            <CadastroNucleoUrbano />
        </div>
        </>
    )
}