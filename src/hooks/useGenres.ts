import staticGenres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: staticGenres,
  });

  return { genres, error, isLoading };
};

export default useGenres;
