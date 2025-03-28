// استيراد المكونات المطلوبة
import GameList from "./GameList";               
import PlatformSelector from "./PlatformSelector"; 
import SortSelector from "./SortSelector";     
import { GameHeading } from "./GameHeading";     


// مكون المحتوى الرئيسي الذي يستقبل خصائص التصفية والبحث
const MainContent = ({ 
    selectGenre,          // النوع المحدد
    onSelectPlatform,     // دالة اختيار المنصة
    selectPlatform,       // المنصة المحددة
    selectSortOrder,      // ترتيب العرض المحدد
    onSelectSortOrder,    // دالة اختيار الترتيب
    searchText           // نص البحث
}) => {
    return (
        <>
            <div className="main-content col-span-5">
                {/* عنوان القسم مع النوع والمنصة المحددة */}
                <GameHeading selectGenre={selectGenre} selectPlatform={selectPlatform} />
                
                {/* قسم عناصر التصفية */}
                <div className="filters flex flex-wrap gap-2 items-center py-2">
                    <PlatformSelector onSelectPlatform={onSelectPlatform} selectPlatform={selectPlatform} />
                    <SortSelector onSelectSortOrder={onSelectSortOrder} selectSortOrder={selectSortOrder} />
                </div>
                
                {/* قسم عرض الألعاب */}
                <div className="cover-card">
                    <GameList 
                        selectPlatform={selectPlatform} 
                        selectGenre={selectGenre} 
                        selectSortOrder={selectSortOrder} 
                        searchText={searchText} 
                    />
                </div>
            </div>
        </>
    );
};


export default MainContent;