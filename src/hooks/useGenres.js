import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: async () => {
            const { data } = await apiClient.get("/genres");
            return data.results;
        },
        staleTime: 1000 * 60 * 60,
    });
};

export default useGenres;