// 'use server'
export default function HorarioAtual() {
    function horarios() {
        const data = new Date()
        const hora = data.getHours()
        const minutos = data.getMinutes()

        return `${hora}:${minutos}`
    }
    return(
        <>
        <p>13 de Janeiro de 2023</p>
            {/* {horarios} */}
        </>
    )
}