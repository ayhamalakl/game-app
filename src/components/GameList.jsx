import "../styelComponents/GameList.css";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameList = ({ selectGenre, selectPlatform, selectSortOrder, searchText }) => {
    const { data, error, isLoading } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error)
        return (
            <div class="error-message" role="alert">
                <span class="error-title">Danger alert!</span> {error}
            </div>
        );

    return (
        <div class="game-list">
            {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
            {data.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
};

export default GameList;