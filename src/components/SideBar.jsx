// استيراد المكونات والأدوات المطلوبة
import { useReducer } from "react";                                    // استيراد خطاف المخفض
import { IoGameControllerOutline, IoCloseOutline } from "react-icons/io5";  // استيراد أيقونات التحكم والإغلاق
import GenreList from "./GenreList";                                  // استيراد مكون قائمة الأنواع
import "../styelComponents/SideBar.css";                             // استيراد ملف التنسيق

// دالة المخفض لإدارة حالة الشريط الجانبي
const toggleReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":                                               // حالة تبديل الشريط
            return { ...state, isOpen: !state.isOpen };             // عكس حالة الفتح/الإغلاق
        default:
            return state;                                           // إرجاع الحالة الحالية
    }
};

// مكون الشريط الجانبي الذي يستقبل دالة اختيار النوع
const SideBar = ({ onSelectGenre }) => {
    // استخدام المخفض لإدارة حالة الشريط الجانبي
    const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });

    // دالة تبديل حالة الشريط الجانبي
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE" });
    };

    return (
        <>
            {/* الشريط الجانبي الرئيسي */}
            <div className={`sidebar-app ${state.isOpen ? "open" : ""}`}>
                {/* رأس الشريط الجانبي */}
                <div className="sidebar-header">
                    <h3 className="sidebar-title">Genres</h3>
                    {/* زر الإغلاق */}
                    <button onClick={toggleSidebar} className="sidebar-close-btn">
                        <IoCloseOutline size={24} />
                    </button>
                </div>
                {/* قائمة الأنواع */}
                <GenreList onSelectGenre={onSelectGenre} isOpen={state.isOpen} />
            </div>

            {/* زر فتح الشريط الجانبي */}
            <div className="sidebar-icon" onClick={toggleSidebar}>
                <IoGameControllerOutline size={30} />
            </div>
        </>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default SideBar;