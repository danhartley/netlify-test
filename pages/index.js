const Home = ({pokemon}) => {
    return (
        <>
            <div>Dowdy {pokemon?.name}!</div>
            <img src={pokemon?.sprites.front_default} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
    const pokemon = await res.json();
    return {
        props: {
            pokemon
        }
    }
};

export default Home