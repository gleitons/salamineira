const expoF = async () => {
    const resp = await fetch('https://script.google.com/macros/s/AKfycbxEZbeVJY1x0H-wUJHmr_lIeLViXdeKZLsrgN2W0g9s12dc4KZB9tfRQIlW9L2RHjLnDA/exec', {next:{revalidate: 10}})
    
    const data = await resp.json()

    return data.saida    
}
export default async function Teste() {
    const dados = await expoF()
   
    return (
        <>
        <h2>Teste</h2>
        <div>
            {dados.map((d) => (
                <p key={d.dataCadastro}>{d.dataCadastro}</p>
            ))}
        </div>
        </>
    )
}