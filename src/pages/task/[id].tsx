import Head from 'next/head';
import styles from './styles.module.css';

export default function Task() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Detalhes da tarefa</title>
            </Head>
        </div>
    )
}