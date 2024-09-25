import { POKEAPI_BASE_URL, REVALIDATE_TIME } from '@/config/api';

export const getValuesEncounter = async (id: string) => {
  try {
    const response = await fetch(
      `${POKEAPI_BASE_URL}encounter-condition-value/${id}/`,
      {
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error('valores de la Condicion de el encuentro no encontrada');
    }

    const contestTypeData = await response.json();
    return contestTypeData;
  } catch (error) {
    console.error(
      `Error al obtener los valores de la condicion del encuentro ${id}:`,
      error
    );
    throw error;
  }
};
