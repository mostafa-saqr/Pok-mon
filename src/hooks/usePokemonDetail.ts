import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "../api/pokemon.service";

export const usePokemonDetail = (id: string) =>
  useQuery({
    queryKey: ["pokemon-detail", id],
    queryFn: async () => {
      const response = await getPokemonDetail(id);
      return response.data;
    },
    enabled: !!id,
  });
