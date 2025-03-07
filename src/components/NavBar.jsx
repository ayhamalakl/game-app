import "../styelComponents/NavBar.css";
import Logo from "./Logo";
import LogoImag from "../assets/images/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = ({ toggleTheme, theme, onSearch }) => {
    return (
        <nav class="navbar">
            {/* Logo Section */}
            <div class="logo-container">
                <Logo image={LogoImag} text="Game App Header" class="logo" />
            </div>

            {/* Search Section */}
            <div class="search-container">
                <SearchInput onSearch={onSearch} />
            </div>

            {/* Theme Toggle Section */}
            <div class="theme-toggle">
                <label class="toggle-label">
                    <input
                        type="checkbox"
                        class="toggle-input"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                        aria-label="Toggle Dark Mode"
                    />
                    <div class="toggle-slider"></div>
                    <span class="toggle-text">{theme === "light" ? "Light" : "Dark"}</span>
                </label>
            </div>
        </nav>
    );
};

export default NavBar;