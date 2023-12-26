import { useQuery } from "@tanstack/react-query";
import staticPlatforms from "../data/platforms";

import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: staticPlatforms.length, results: staticPlatforms },
  });

  return { platforms, error, isLoading };
};

export default usePlatforms;
