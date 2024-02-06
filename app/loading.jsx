import load from '@/public/img/load.svg'
import Image from 'next/image'
export default function Loading() {
    return (
        <>
            {/* <div>Loading</div> */}
            <Image src={load} alt='Carregando' width={50} height={50} />
        </>
        

    )
}