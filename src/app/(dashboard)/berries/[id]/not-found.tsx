import Link from 'next/link'
import '../../styles.css'
export default function NotFound() {
    return (
        <main className="container">
            <h1 className="error-title">404</h1>
            <div className="message">No se encontró la baya que estaba buscando</div>
            <button className="button">
                <Link href="/berries">Ver Bayas Disponibles</Link>
            </button>
        </main>
    )
}
