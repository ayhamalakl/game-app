// useGames.js
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useGames = (selectGenre, selectPlatform, selectSortOrder, searchText) => {
    return useQuery({
        queryKey: ["games", selectGenre?.id, selectPlatform?.id, selectSortOrder, searchText], 
        queryFn: async () => {
            const { data } = await apiClient.get("/games", {
                params: {
                    genres: selectGenre?.id,
                    platforms: selectPlatform?.id,
                    ordering: selectSortOrder,
                    search: searchText,
                },
            });
            return data.results; 
        },
        staleTime: 1000 * 60 * 5,
    });
};
export default useGames;