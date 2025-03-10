// usePlatform.js
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const usePlatform = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: async () => {
            const { data } = await apiClient.get("/platforms");
            return data.results;
        },
        staleTime: 1000 * 60 * 60 * 24,
    });
};

export default usePlatform;