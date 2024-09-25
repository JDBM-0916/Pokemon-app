import { POKEAPI_BASE_URL, REVALIDATE_TIME } from "@/config/api";
import { ContestSimples } from "@/interfaces/contest/contest-simple";
import { ContestRespuesta } from "@/interfaces/pokemones/pokemonesRespuesta";

export const getContest = async (
  limit = 20,
  offset = 0
): Promise<ContestSimples[]> => {
  try {
    const response = await fetch(
      `${POKEAPI_BASE_URL}contest-type?offset=${offset}&limit=${limit}`,
      {
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error al obtener los tipos de concursos: ${response.statusText}`);
    }
    const data: ContestRespuesta = await response.json();
    const contests: ContestSimples[] = data.results.map((contest) => ({
      id: contest.url.split('/').at(-2) ?? '',
      name: contest.name,
    }));
    return contests;
  } catch (error) {
    console.error('Error al obtener los tipos de concursos:', error);
    throw new Error('No se pudieron obtener los tipos de concursos.');
  }
};
