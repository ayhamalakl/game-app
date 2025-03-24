// استيراد المكونات والأدوات المطلوبة
import "../styelComponents/GameList.css";                // استيراد ملف التنسيق
import useGames from "../hooks/useGames";                // استيراد خطاف جلب الألعاب
import GameCard from "./GameCard";                       // استيراد مكون بطاقة اللعبة
import GameCardSkeleton from "./GameCardSkeleton";       // استيراد مكون الهيكل العظمي للبطاقة

// مكون قائمة الألعاب الذي يستقبل معايير التصفية
const GameList = ({ selectGenre, selectPlatform, selectSortOrder, searchText }) => {
    // استخدام خطاف useGames لجلب البيانات مع معايير التصفية
    const { data = [], error, isLoading } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);
    // إنشاء مصفوفة من 6 عناصر للهياكل العظمية
    const skeletons = Array.from({ length: 6 }, (_, i) => i + 1);

    // إذا كان هناك خطأ، عرض رسالة الخطأ
    if (error)
        return <div className="error-message" role="alert">⚠ {error.message}</div>;

    // عرض قائمة الألعاب
    return (
        <div className="game-list">
            {/* عرض الهياكل العظمية أثناء التحميل */}
            {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
            {/* عرض بطاقات الألعاب بعد تحميل البيانات */}
            {data.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default GameList;