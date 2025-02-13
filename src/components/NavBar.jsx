import Logo from "./Logo";
import LogoImag from "../assets/images/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = ({ toggleTheme, theme, onSearch }) => {
    return (
        <nav className="navbar-app py-3 px-4 border-b border-gray-400 mb-3 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md">
            {/* Logo Section */}
            <div className="cover-logo flex items-center">
                <Logo image={LogoImag} text="Game App Header" className="h-10 w-auto" />
            </div>

            {/* Search Section */}
            <div className="cover-search flex-1 mx-4">
                <SearchInput onSearch={onSearch} />
            </div>

            {/* Theme Toggle Section */}
            <div className="theme-mode flex items-center">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                        aria-label="Toggle Dark Mode"
                    />
                    <div className="relative w-12 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 transition-all duration-300 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600">
                        <div
                            className="absolute top-0.5 left-1 bg-white border border-gray-300 rounded-full h-5 w-5 transition-all duration-300 dark:border-gray-600 peer-checked:translate-x-6"
                        ></div>
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {theme === "light" ? "Light" : "Dark"}
                    </span>
                </label>
            </div>
        </nav>
    );
};

export default NavBar;
