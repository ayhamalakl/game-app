// استيراد المكونات والأصول المطلوبة
import "../styelComponents/NavBar.css";           
import Logo from "./Logo";                        
import LogoImag from "../assets/images/logo.webp";  
import SearchInput from "./SearchInput";             

// مكون شريط التنقل الذي يستقبل خصائص تبديل السمة والبحث
const NavBar = ({ toggleTheme, theme, onSearch }) => {
    return (
        <nav className="navbar">
            {/* قسم الشعار */}
            <div className="logo-container">
                <Logo image={LogoImag} text="Game App Header" className="logo" />
            </div>

            {/* قسم البحث */}
            <div className="search-container">
                <SearchInput onSearch={onSearch} />
            </div>

            {/* قسم تبديل السمة */}
            <div className="theme-toggle">
                <label className="toggle-label">
                    <input
                        type="checkbox"
                        className="toggle-input"
                        onChange={toggleTheme}           // دالة تغيير السمة
                        checked={theme === "dark"}       // حالة السمة الحالية
                        aria-label="Toggle Dark Mode"    // نص وصفي للقارئ الآلي
                    />
                    <div className="toggle-slider"></div>
                    {/* نص يعرض السمة الحالية */}
                    <span className="toggle-text">{theme === "light" ? "Light" : "Dark"}</span>
                </label>
            </div>
        </nav>
    );
};


export default NavBar;