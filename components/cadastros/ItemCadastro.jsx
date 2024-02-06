import { FaUserAlt } from "react-icons/fa";
import styles from './itemcadastro.module.css'
import Link from "next/link";
export default function ItemCadastro() {
    return (
        <Link href='/' className={styles.container}>
            <div >
                <FaUserAlt />
                <p>Pessoal</p>
            </div>
        </Link>

    )
}