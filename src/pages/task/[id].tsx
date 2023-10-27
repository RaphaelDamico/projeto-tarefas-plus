import Head from 'next/head';
import styles from './styles.module.css';
import { GetServerSideProps } from 'next';

export default function Task() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Detalhes da tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1>Tarefa</h1>
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id as string;

    console.log(id);
    return{
        props: {}
    };
};