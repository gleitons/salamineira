import { AiOutlineSearch } from 'react-icons/ai';
import RedeSocial from './RedeSocial';
export default function MenuTop() {
    return (
        <nav className='flex  m-auto gap-4'>
            <ul className="flex gap-2">
                <li className="flex items-center">
                    <AiOutlineSearch />
                    <p>Atendimentos</p>
                </li>
                <li className="flex items-center">
                    <AiOutlineSearch />
                    <p>Links Úteis</p>
                </li>
                <li className="flex items-center">
                    <AiOutlineSearch />
                    <p>Eventos e Inscrições</p>
                </li>
            </ul>
            <RedeSocial />
        </nav>
    )
}