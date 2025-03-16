import { useReducer, useEffect } from "react";
import themeReducer from "./reducer/themeReducer";
import gameQueryReducer from "./reducer/gameQueryReducer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
    const [theme, dispatchTheme] = useReducer(themeReducer, localStorage.getItem("theme") || "light");

    const [gameQuery, dispatchGameQuery] = useReducer(gameQueryReducer, {
        searchText: "",
        genre: null,
        platform: null,
        sortOrder: null,
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => dispatchTheme({ type: "TOGGLE_THEME" });

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <NavBar
                toggleTheme={toggleTheme}
                theme={theme}
                onSearch={(searchText) => dispatchGameQuery({ type: "SET_SEARCH_TEXT", payload: searchText })}
            />
            <div className="grid grid-cols-6 gap-4">
                <SideBar onSelectGenre={(genre) => dispatchGameQuery({ type: "SET_GENRE", payload: genre })} />
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
