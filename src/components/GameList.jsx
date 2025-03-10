// GameList.jsx
import "../styelComponents/GameList.css";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameList = ({ selectGenre, selectPlatform, selectSortOrder, searchText }) => {
    const { data = [], error, isLoading } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);
    const skeletons = Array.from({ length: 6 }, (_, i) => i + 1);

    if (error)
        return <div className="error-message" role="alert">⚠ {error.message}</div>;

    return (
        <div className="game-list">
            {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
            {data.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
    );
};

export default GameList;