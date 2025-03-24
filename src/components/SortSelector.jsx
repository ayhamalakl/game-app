// استيراد المكونات والأدوات المطلوبة
import "../styelComponents/SortSelector.css";                // استيراد ملف التنسيق
import { useEffect, useRef, useReducer } from "react";      // استيراد الخطافات المطلوبة
import toggleReducer from "../reducer/toggleReducer";        // استيراد مخفض التبديل

// مكون محدد الترتيب الذي يستقبل دالة الاختيار والترتيب المحدد
const SortSelector = ({ onSelectSortOrder, selectSortOrder }) => {
    // استخدام المخفض لإدارة حالة القائمة المنسدلة
    const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });
    // مرجع للقائمة المنسدلة لمعالجة النقر خارجها
    const dropdownRef = useRef(null);

    // تعريف خيارات الترتيب المتاحة
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-release", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    // تحديد تسمية الترتيب المحدد حالياً
    const selectedSortLabel = sortOrders.find((order) => order.value === selectSortOrder)?.label || "Relevance";

    // تأثير جانبي لمعالجة النقر خارج القائمة
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dispatch({ type: "CLOSE" });              // إغلاق القائمة عند النقر خارجها
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="sort-selector" ref={dropdownRef}>
            {/* زر فتح/إغلاق القائمة */}
            <button onClick={() => dispatch({ type: "TOGGLE" })} className="sort-button" type="button">
                Order by: {selectedSortLabel}
                {/* أيقونة السهم المتحركة */}
                <svg className={`dropdown-icon ${state.isOpen ? "rotate" : ""}`} viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* قائمة خيارات الترتيب */}
            {state.isOpen && (
                <div className="sort-menu">
                    <ul>
                        {sortOrders.map((order) => (
                            <li 
                                key={order.value} 
                                className="sort-item" 
                                onClick={() => {
                                    onSelectSortOrder(order.value);    // اختيار الترتيب
                                    dispatch({ type: "CLOSE" });       // إغلاق القائمة
                                }}
                            >
                                {order.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default SortSelector;