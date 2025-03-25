// استيراد خطاف المرجع من React
import { useRef } from "react";

import "../styelComponents/SearchInput.css";

// مكون حقل البحث الذي يستقبل دالة البحث والسمة
const SearchInput = ({ onSearch, theme }) => {
    // إنشاء مرجع للوصول إلى قيمة حقل البحث
    const ref = useRef(null);
    
    return (
        <form 
            // تطبيق تنسيق النموذج حسب السمة
            className={`search-form ${theme === "dark" ? "dark" : "light"}`}
            // معالجة تقديم النموذج
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            {/* تسمية حقل البحث للقراء الآليين */}
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <div className="search-container">
                {/* حاوية أيقونة البحث */}
                <div className="search-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                    </svg>
                </div>
                {/* حقل إدخال البحث */}
                <input
                    ref={ref}                    // ربط المرجع بحقل الإدخال
                    type="search"                // نوع الحقل للبحث
                    id="search"                  // معرف الحقل
                    className="search-input"         // تنسيق الحقل
                    placeholder="Search..."      // نص تلميحي
                    required                     // حقل مطلوب
                />
            </div>
        </form>
    );
};


export default SearchInput;