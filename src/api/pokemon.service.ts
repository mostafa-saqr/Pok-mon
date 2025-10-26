import { apiClient } from "./client";
import type { PokemonListResponse, PokemonDetail } from "../types/pokemon";

export const getPokemonList = (limit = 10, offset = 0) =>
  apiClient.get<PokemonListResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

export const getPokemonDetail = (id: string | number) =>
  apiClient.get<PokemonDetail>(`/pokemon/${id}`);
