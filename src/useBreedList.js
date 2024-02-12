import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList.js";

export default function useBreedList(animal) {
  if (!animal) {
    return [[], "success"];
  }
  const results = useQuery({
    queryKey: ["breedList", animal],
    queryFn: fetchBreedList,
  });

  return [results?.data?.breeds ?? [], results.status];
}
