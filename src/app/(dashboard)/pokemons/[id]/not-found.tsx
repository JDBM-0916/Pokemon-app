import Link from 'next/link'
import '../../styles.css';

export default function NotFound() {
    return (
        <main className="container">
            <h1 className="error-title">404</h1>
            <div className="message">No se encontró el Pokémon que estaba buscando</div>
            <button className="button">
                <Link href="/pokemons">Ver Pokemones Disponibles</Link>
            </button>
        </main>
    )
}
