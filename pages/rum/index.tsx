import Link from 'next/link';
import { useRouter } from 'next/router';

const Rum = () => {

    const router = useRouter();

    const handleOnClick = e => {
        e.preventDefault();
        router.push('/fun')
    };

    return (
        <>
            <div>Rum!</div>
            <Link href="/">
                <a>Go home</a>
            </Link>
            <button onClick={handleOnClick}>Go to fun fun!</button>
        </>
    )
}

export default Rum