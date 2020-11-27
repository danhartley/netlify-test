import Head from 'next/head';
import styles from './styles.module.css';

const Fun = ({pokemon}) => {
    return (
        <>
            <Head>
                <title>Dowdy cottontails</title>
            </Head>
            <div className={styles.container}>Dowdy {pokemon?.name}!</div>
            <img src={pokemon?.sprites.front_default} />
        </>
    )
}

export default Fun;

export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.fun}`);
    const pokemon = await res.json();
    return {
        props: {
            pokemon
        }
    }
};

export const getStaticPaths = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const pokemon = await res.json();

    let paths = pokemon.results.map(p => `/fun/${p.name}`);

    return {
        paths,
        fallback: false
    };
};