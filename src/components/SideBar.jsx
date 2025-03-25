// استيراد المكونات والأدوات المطلوبة
import { useReducer } from "react";                                    
import { TbLayoutNavbarExpand } from "react-icons/tb"; 
import GenreList from "./GenreList";                                  
import toggleReducer from "../reducer/toggleReducer";                  // استيراد المخفض الخارجي
import "../styelComponents/SideBar.css";                             

// مكون الشريط الجانبي الذي يستقبل دالة اختيار النوع
const SideBar = ({ onSelectGenre }) => {
    // استخدام المخفض الخارجي لإدارة حالة الشريط الجانبي
    const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });

    return (
        <>
            {/* الشريط الجانبي الرئيسي */}
            <div className={`sidebar-app ${state.isOpen ? "open" : ""}`}>
                {/* رأس الشريط الجانبي */}
                <div className="sidebar-header">
                    <h3 className="sidebar-title">Genres</h3>
                    {/* زر الإغلاق */}
                    <button 
                        onClick={() => dispatch({ type: "TOGGLE" })} 
                        className="sidebar-close-btn"
                    >
                        <TbLayoutNavbarExpand size={24} />
                    </button>
                </div>
                {/* قائمة الأنواع */}
                <GenreList onSelectGenre={onSelectGenre} isOpen={state.isOpen} />
            </div>

            {/* زر فتح الشريط الجانبي */}
            <div 
                className="sidebar-icon" 
                onClick={() => dispatch({ type: "TOGGLE" })}
            >
                <TbLayoutNavbarExpand size={30}/>
            </div>
        </>
    );
};

export default SideBar;