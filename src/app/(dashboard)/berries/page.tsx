import '../styles.css';
import { Metadata } from 'next';
import { BerriesGrid } from '@/components/berries/BerriesGrid';
import { getBerries } from '@/services/berries/get-berries';

export const metadata: Metadata = {
  title: 'listado de Berries',
  description: 'listado de todos los berries disponibles',
};

export default async function PokemonesPage() {

  const cant_berries = 64;
  const berries = await getBerries(cant_berries);

  return (
    <div>
      <h1 className="main-title">
        Listado completo de Berries, las cuales ofrecen efectos únicos para
        curar, mejorar estadísticas y reducir daño en combate
      </h1>
      <BerriesGrid Berries={berries} cant={cant_berries} />
    </div>
  );
}
