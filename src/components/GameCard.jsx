import { Link,  } from "react-router-dom";                   
import getCroppedImageUrl from "../services/image-url";     
import PlatformIconList from "./PlatformIconList";        
import CriticScore from "./CriticScore";                   
import Emoji from "./Emoji";                                
import "../styelComponents/GameCard.css"                 

// مكون بطاقة اللعبة الذي يستقبل بيانات اللعبة كخاصية
const GameCard = ({ game }) => {
  return (
    <div className="games-container">                        {/* حاوية البطاقات */}
    <div className="game-card">                          
        <img
          className="game-card-image"                       
          src={getCroppedImageUrl(game.background_image)}    
          alt={game.name}                                   
        />
      <div className="game-card-content">                
        <div className="game-card-header">               
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} /> 
          <CriticScore score={game.metacritic} />       
        </div>

        <h5 className="game-card-title">                 
            {game.name} <Emoji rating={game.rating_top} /> 
        </h5>
        <Link to={`/GameDetails/${game.id}`} className="game-details-button">  
            Details
        </Link>
      </div>
    </div>
    </div>
  );
};


export default GameCard;