import staticGenres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: staticGenres,
  });

  return { genres, error, isLoading };
};

export default useGenres;
