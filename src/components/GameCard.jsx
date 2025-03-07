import "../styelComponents/GameCard.css"
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Emoji } from "./Emoji";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }) => {
    return (
        <div class="game-card">
            <a href="#">
                <img
                    class="game-card-image"
                    src={getCroppedImageUrl(game.background_image)}
                    alt={game.name}
                />
            </a>
            <div class="game-card-content">
                <div class="game-card-header">
                    <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </div>
                <a href="#">
                    <h5 class="game-card-title">
                        {game.name} <Emoji rating={game.rating_top} />
                    </h5>
                </a>
            </div>
        </div>
    );
};

export default GameCard;