// استيراد المكونات والأصول المطلوبة
import "../styelComponents/NavBar.css";              // استيراد ملف التنسيق
import Logo from "./Logo";                          // استيراد مكون الشعار
import LogoImag from "../assets/images/logo.webp";   // استيراد صورة الشعار
import SearchInput from "./SearchInput";             // استيراد مكون البحث

// مكون شريط التنقل الذي يستقبل خصائص تبديل السمة والبحث
const NavBar = ({ toggleTheme, theme, onSearch }) => {
    return (
        <nav class="navbar">
            {/* قسم الشعار */}
            <div class="logo-container">
                <Logo image={LogoImag} text="Game App Header" class="logo" />
            </div>

            {/* قسم البحث */}
            <div class="search-container">
                <SearchInput onSearch={onSearch} />
            </div>

            {/* قسم تبديل السمة */}
            <div class="theme-toggle">
                <label class="toggle-label">
                    <input
                        type="checkbox"
                        class="toggle-input"
                        onChange={toggleTheme}           // دالة تغيير السمة
                        checked={theme === "dark"}       // حالة السمة الحالية
                        aria-label="Toggle Dark Mode"    // نص وصفي للقارئ الآلي
                    />
                    <div class="toggle-slider"></div>
                    {/* نص يعرض السمة الحالية */}
                    <span class="toggle-text">{theme === "light" ? "Light" : "Dark"}</span>
                </label>
            </div>
        </nav>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default NavBar;