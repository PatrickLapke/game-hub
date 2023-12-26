import apiClient from "../services/api-client";
import staticGenres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const fetchGenres = () =>
    apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

  const {
    data: genres,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: staticGenres.length, results: staticGenres },
  });

  return { genres, error, isLoading };
};

export default useGenres;
