import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';
import { Items } from '@/interfaces/items/items';

import { notFound } from 'next/navigation';

export const getItemsById = async (id: string): Promise<Items> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}item/${id}/`, {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    if (!response.ok) {
      throw new Error('Objeto no encontrado');
    }

    const datosObjeto: Items = await response.json();
    return datosObjeto;
  } catch (error) {
    console.error(`Error al obtener  Objeto con ID ${id}:`, error);
    notFound();
  }
};

export const generateItemsMetadata = async (id: string) => {
  try {
    const { name } = await getItemsById(id);
    return {
      title: `Detalles del Objeto ${name}`,
      description: `Información detallada del Objeto ${name}`,
    };
  } catch (error) {
    console.error(
      `Error al generar metadata para el Objeto con ID ${id}:`,
      error
    );
    return {
      title: 'Objeto no encontrado',
      description: 'el Objeto solicitado no existe o no está disponible',
    };
  }
};
