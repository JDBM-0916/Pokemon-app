
import { getGames } from '@/services/games/get-games';
import '../styles.css';
import { Metadata } from 'next';
import { GamesGrid } from '@/components/games/gamesGrid';


export const metadata: Metadata = {
  title: 'Juegos',
  description: 'listado de todos los Juegos',
};


export default async function GamesPage() {

  const cant_Games = 100;
  const games = await getGames(cant_Games);
  return (
    <div>
      <h1 className="main-title">
        "Juegos por Generaciones Pokemon!"
      </h1>
      <GamesGrid Games={games} />
    </div>
  );
}
