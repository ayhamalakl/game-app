import useData from "./useData";

const useGames = (selectGenre, selectPlatform, selectSortOrder, searchText) =>
    useData(
        "/games",
        {
            params: {
                genres: selectGenre?.id,
                platforms: selectPlatform?.id,
                ordering: selectSortOrder,
                search: searchText,
            },
        },
        [selectGenre?.id, selectPlatform?.id, selectSortOrder, searchText]
    );

export default useGames;
