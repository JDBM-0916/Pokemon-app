import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';

export const getEncountersCondition = async (id: string) => {
  try {
    const response = await fetch(
      `${POKEAPI_BASE_URL}encounter-condition/${id}/`,
      {
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Condicion de el encuentro no encontrada');
    }

    const contestTypeData = await response.json();
    return contestTypeData;
  } catch (error) {
    console.error(`Error al obtener la condicion del encuentro con ID ${id}:`, error);
    throw error;
  }
};
