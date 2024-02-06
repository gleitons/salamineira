import ItemCadastro from '@/components/cadastros/ItemCadastro'
import styles from './cadastros.module.css'
export default function Cadastros() {
    return (
        <div>
            <h2>Cadastros</h2>
            <div className={styles.container}>
                <ItemCadastro />
                <ItemCadastro />
                <ItemCadastro />
                <ItemCadastro />
            </div>
        </div>
    )
}