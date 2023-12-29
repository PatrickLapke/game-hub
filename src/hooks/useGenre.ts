import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
