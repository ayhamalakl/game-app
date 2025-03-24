// استيراد الخطافات والمكونات المطلوبة
import useGenres from "../hooks/useGenres";              // استيراد خطاف جلب الأنواع
import { useReducer } from "react";                      // استيراد خطاف المخفض
import "../styelComponents/GenerList.css";               // استيراد ملف التنسيق

// دالة المخفض لإدارة حالة النوع المحدد
const genreReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_GENRE":                            // عند اختيار نوع
            return action.payload;                       // إرجاع معرف النوع المحدد
        default:
            return state;                               // إرجاع الحالة الحالية
    }
};

// مكون قائمة الأنواع الذي يستقبل دالة التحديد وحالة الفتح
const GenreList = ({ onSelectGenre, isOpen }) => {
    // استخدام خطاف useGenres لجلب بيانات الأنواع
    const { data = [], isLoading } = useGenres();
    // استخدام المخفض لإدارة حالة النوع المحدد
    const [selectedGenre, dispatch] = useReducer(genreReducer, null);

    // عرض مؤشر التحميل إذا كانت البيانات قيد التحميل
    if (isLoading)
        return <div className="loader-container"><div className="loader"></div></div>;

    // عرض قائمة الأنواع
    return (
        <div className={`genre-list ${isOpen ? 'genre-list-open' : ''}`}>
            {data.map((genre) => (
                <button
                    key={genre.id}                      // مفتاح فريد لكل نوع
                    onClick={() => {
                        onSelectGenre(genre);           // استدعاء دالة التحديد
                        dispatch({ type: "SELECT_GENRE", payload: genre.id }); // تحديث الحالة
                    }}
                    className={`genre-item ${selectedGenre === genre.id ? "active" : ""}`}
                >
                    <img src={genre.image_background} alt={genre.name} className="genre-image" />
                    <span className="genre-name">{genre.name}</span>
                </button>
            ))}
        </div>
    );
};

// تصدير المكون للاستخدام في أجزاء أخرى من التطبيق
export default GenreList;