


import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';

export const getEncountersById = async (id: string) => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}encounter-method/${id}/`, {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    if (!response.ok) {
      throw new Error('Tipo de encuentro no encontrado');
    }

    const contestTypeData = await response.json();
    return contestTypeData;
  } catch (error) {
    console.error(`Error al obtener el tipo de encuentro con ID ${id}:`, error);
    throw error;
  }
};
