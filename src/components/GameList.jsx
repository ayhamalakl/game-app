import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameList = ({ selectGenre, selectPlatform, selectSortOrder, searchText }) => {
    const { data, error, isLoading } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error)
        return (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">Danger alert!</span> {error}
            </div>
        );

    return (
        <>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
                {data.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    );
};

export default GameList;
