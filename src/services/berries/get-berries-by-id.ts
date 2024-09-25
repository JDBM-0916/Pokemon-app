import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';
import { Berry } from '@/interfaces/berries/berrie';
import { notFound } from 'next/navigation';



export const getBerriesById = async (id: string): Promise<Berry> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}berry/${id}/`, {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    if (!response.ok) {
      throw new Error('Baya no encontrada');
    }

    const datosBaya: Berry = await response.json();
    return datosBaya;
  } catch (error) {
    console.error(`Error al obtener la baya con ID ${id}:`, error);
    notFound();
  }
};

export const generateBerryMetadata = async (id: string) => {
  try {
    const { name } = await getBerriesById(id);
    return {
      title: `Detalles de la baya ${name}`,
      description: `Información detallada de la baya ${name}`,
    };
  } catch (error) {
    console.error(
      `Error al generar metadata para la baya con ID ${id}:`,
      error
    );
    return {
      title: 'Baya no encontrada',
      description: 'La baya solicitada no existe o no está disponible',
    };
  }
};
