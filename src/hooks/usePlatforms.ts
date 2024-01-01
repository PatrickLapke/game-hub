import { useQuery } from "@tanstack/react-query";
import staticPlatforms from "../data/platforms";
import ms from "ms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: staticPlatforms,
  });

  return { platforms, error, isLoading };
};

export default usePlatforms;
