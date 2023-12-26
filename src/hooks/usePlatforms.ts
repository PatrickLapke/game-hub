import { useQuery } from "@tanstack/react-query";
import staticPlatforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatforms = () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms/lists/parents")
      .then((res) => res.data);

  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: staticPlatforms.length, results: staticPlatforms },
  });

  return { platforms, error, isLoading };
};

export default usePlatforms;
