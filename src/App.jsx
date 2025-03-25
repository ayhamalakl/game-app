// استيراد المكتبات والمكونات الأساسية
import { useReducer, useEffect } from "react";
import themeReducer from "./reducer/themeReducer";
import gameQueryReducer from "./reducer/gameQueryReducer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
    // إدارة حالة السمة (مظلم/فاتح) مع حفظها في التخزين المحلي
    const [theme, dispatchTheme] = useReducer(themeReducer, localStorage.getItem("theme") || "light");

    // إدارة حالة تصفية الألعاب وبحثها
    const [gameQuery, dispatchGameQuery] = useReducer(gameQueryReducer, {
        searchText: "",     // نص البحث عن الألعاب
        genre: null,        // نوع اللعبة (مثل: أكشن، مغامرة)
        platform: null,     // منصة اللعب (مثل: PC، PS5)
        sortOrder: null,    // ترتيب النتائج
    });

    // تحديث السمة في المتصفح وحفظها
    useEffect(() => {
        // تطبيق السمة على مستوى HTML
        document.documentElement.classList.toggle("dark", theme === "dark");
        // حفظ اختيار المستخدم للسمة
        localStorage.setItem("theme", theme);
    }, [theme]);

    // دالة تبديل السمة بين المظلم والفاتح
    const toggleTheme = () => dispatchTheme({ type: "TOGGLE_THEME" });

    return (
        // الحاوية الرئيسية مع دعم السمة المظلمة
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            {/* شريط التنقل مع وظائف البحث وتبديل السمة */}
            <NavBar
                toggleTheme={toggleTheme}
                theme={theme}
                onSearch={(searchText) => dispatchGameQuery({ type: "SET_SEARCH_TEXT", payload: searchText })}
            />
            {/* تخطيط شبكي متجاوب للمحتوى */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
                {/* الشريط الجانبي لتصفية الأنواع */}
                <div className="md:col-span-1 lg:col-span-1">
                    <SideBar onSelectGenre={(genre) => dispatchGameQuery({ type: "SET_GENRE", payload: genre })} />
                </div>
                {/* المحتوى الرئيسي مع عرض الألعاب */}
                <div className="md:col-span-3 lg:col-span-5">
                    <MainContent
                        selectPlatform={gameQuery.platform}
                        selectSortOrder={gameQuery.sortOrder}
                        selectGenre={gameQuery.genre}
                        searchText={gameQuery.searchText}
                        onSelectPlatform={(platform) => dispatchGameQuery({ type: "SET_PLATFORM", payload: platform })}
                        onSelectSortOrder={(sortOrder) => dispatchGameQuery({ type: "SET_SORT_ORDER", payload: sortOrder })}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;