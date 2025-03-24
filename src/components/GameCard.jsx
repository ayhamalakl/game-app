// استيراد المكتبات والمكونات المطلوبة
import { Link,  } from "react-router-dom";                    // استيراد مكون الرابط للتنقل
import getCroppedImageUrl from "../services/image-url";       // استيراد دالة معالجة الصور
import PlatformIconList from "./PlatformIconList";           // استيراد مكون قائمة المنصات
import CriticScore from "./CriticScore";                     // استيراد مكون تقييم النقاد
import Emoji from "./Emoji";                                 // استيراد مكون الإيموجي
import "../styelComponents/GameCard.css"                     // استيراد ملف التنسيق

// مكون بطاقة اللعبة الذي يستقبل بيانات اللعبة كخاصية
const GameCard = ({ game }) => {
  return (
    <div className="games-container">                        {/* حاوية البطاقات */}
    <div className="game-card">                             {/* بطاقة اللعبة */}
        <img
          className="game-card-image"                        // صورة اللعبة
          src={getCroppedImageUrl(game.background_image)}    // معالجة وتحميل الصورة
          alt={game.name}                                    // نص بديل للصورة
        />
      <div className="game-card-content">                   {/* محتوى البطاقة */}
        <div className="game-card-header">                  {/* رأس البطاقة */}
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />  {/* عرض أيقونات المنصات */}
          <CriticScore score={game.metacritic} />           {/* عرض تقييم النقاد */}
        </div>

        <h5 className="game-card-title">                    {/* عنوان اللعبة */}
            {game.name} <Emoji rating={game.rating_top} />   {/* اسم اللعبة مع إيموجي التقييم */}
        </h5>
        <Link to={`/GameDetails/${game.id}`} className="game-details-button">  {/* زر التفاصيل */}
            Details
        </Link>
      </div>
    </div>
    </div>
  );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default GameCard;