// استيراد المكونات والخطافات المطلوبة
import "../styelComponents/PlatformSelector.css";    // استيراد ملف التنسيق
import { useReducer } from "react";                  // استيراد خطاف المخفض
import usePlatform from "../hooks/usePlatform";      // استيراد خطاف جلب المنصات
import toggleReducer from "../reducer/toggleReducer";  // استيراد مخفض التبديل

// مكون محدد المنصات الذي يستقبل دالة الاختيار والمنصة المحددة
const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
    // استخدام خطاف usePlatform لجلب بيانات المنصات
    const { data = [], error } = usePlatform();
    // استخدام المخفض لإدارة حالة فتح/إغلاق القائمة
    const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });

    // إذا كان هناك خطأ، لا نعرض شيئاً
    if (error) return null;

    return (
        <div className="platform-selector">
            {/* زر فتح/إغلاق القائمة */}
            <button onClick={() => dispatch({ type: "TOGGLE" })} className="platform-button">
                {selectPlatform?.name || "Platforms"}
                {/* أيقونة السهم المتحركة */}
                <svg className={`dropdown-icon ${state.isOpen ? "rotate" : ""}`} viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {/* قائمة المنصات المنسدلة */}
            {state.isOpen && (
                <div className="platform-menu">
                    <ul>
                        {data.map((platform) => (
                            <li 
                                key={platform.id} 
                                onClick={() => { 
                                    onSelectPlatform(platform);    // اختيار المنصة
                                    dispatch({ type: "CLOSE" });   // إغلاق القائمة
                                }} 
                                className="platform-item"
                            >
                                <img src={platform.image_background} alt="" className="platform-icon" />
                                {platform.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default PlatformSelector;