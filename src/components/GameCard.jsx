import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import { Emoji } from "./Emoji";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img 
                    className="rounded-t-xl w-full h-60 object-cover" 
                    src={getCroppedImageUrl(game.background_image)} 
                    alt={game.name} 
                />
            </a>
            <div className="p-5">
                {/* قائمة الأيقونات والتقييم */}
                <div className="flex justify-between items-center mb-3">
                    <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </div>

                {/* عنوان اللعبة */}
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
                        {game.name} <Emoji rating={game.rating_top} />
                    </h5>
                </a>
            </div>
        </div>
    );
};

export default GameCard;
