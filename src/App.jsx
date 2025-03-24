import { useReducer, useEffect } from "react";
import themeReducer from "./reducer/themeReducer"; // استيراد الـ reducer الخاص بالتبديل بين السمة الفاتحة والداكنة
import gameQueryReducer from "./reducer/gameQueryReducer"; // استيراد الـ reducer الخاص بإعدادات البحث
import MainContent from "./components/MainContent"; // استيراد المكون الذي يعرض المحتوى الرئيسي
import NavBar from "./components/NavBar"; // استيراد مكون الشريط العلوي
import SideBar from "./components/SideBar"; // استيراد مكون الشريط الجانبي

function App() {
    // استخدام useReducer لإدارة حالة السمة (الوضع الداكن أو الفاتح)
    const [theme, dispatchTheme] = useReducer(themeReducer, localStorage.getItem("theme") || "light");

    // استخدام useReducer لإدارة حالة البحث المتعلقة بالألعاب
    const [gameQuery, dispatchGameQuery] = useReducer(gameQueryReducer, {
        searchText: "", // نص البحث
        genre: null, // النوع المختار
        platform: null, // النظام الأساسي المختار
        sortOrder: null, // ترتيب الفرز
    });

    // التأثير الجانبي عند تغيير السمة، لتحديث الـ class في الـ HTML المحلي
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme); // حفظ السمة في الـ localStorage
    }, [theme]);

    // دالة للتبديل بين السمة الفاتحة والداكنة
    const toggleTheme = () => dispatchTheme({ type: "TOGGLE_THEME" });

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            {/* مكون الشريط العلوي مع تمرير دالة التبديل بين السمة */}
            <NavBar
                toggleTheme={toggleTheme}
                theme={theme}
                // دالة لتمرير نص البحث إلى الـ reducer
                onSearch={(searchText) => dispatchGameQuery({ type: "SET_SEARCH_TEXT", payload: searchText })}
            />
            <div className="grid grid-cols-6 gap-4">
                {/* مكون الشريط الجانبي مع تمرير دالة لاختيار النوع */}
                <SideBar onSelectGenre={(genre) => dispatchGameQuery({ type: "SET_GENRE", payload: genre })} />
                {/* مكون المحتوى الرئيسي مع تمرير دوال لتحديد النظام الأساسي، ترتيب الفرز، والنوع */}
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
    );
}

export default App;
