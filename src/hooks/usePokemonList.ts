import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/pokemon.service";

export const usePokemonList = (limit: number, offset: number) =>
  useQuery({
    queryKey: ["pokemon-list", limit, offset],
    queryFn: () => getPokemonList(limit, offset),
  });
