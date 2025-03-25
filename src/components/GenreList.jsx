// استيراد الخطافات والأنماط المطلوبة
import useGenres from "../hooks/useGenres";
import { useReducer } from "react";
import "../styelComponents/GenerList.css";
import genreReducer from "../reducer/genreReducer";

// مكون قائمة الأنواع الذي يتعامل مع اختيار وعرض الأنواع
const GenreList = ({ onSelectGenre, isOpen }) => {
    // جلب بيانات الأنواع وإدارة حالة النوع المحدد
    const { data = [], isLoading, error } = useGenres();
    const [selectedGenre, dispatch] = useReducer(genreReducer, null);

    // عرض حالة التحميل
    if (isLoading)
        return <div className="loader-container"><div className="loader"></div></div>;

    // معالجة حالة الخطأ
    if (error)
        return <div className="error-message">
            <p className="error-title">Error loading genres</p>
            <p>{error.message}</p>
        </div>;

    // معالجة حالة البيانات الفارغة
    if (!data.length)
        return <div className="error-message">No genres found</div>;

    // عرض قائمة الأنواع
    return (
        <div className={`genre-list ${isOpen ? 'genre-list-open' : ''}`}>
            {data.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => {
                        onSelectGenre(genre);      // تحديث المكون الأب
                        dispatch({ type: "SELECT_GENRE", payload: genre.id });  // تحديث الحالة المحلية
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

export default GenreList;