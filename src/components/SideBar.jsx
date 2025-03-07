import "../styelComponents/SideBar.css";
import GenreList from "./GenreList";
import { useState } from "react";

const SideBar = ({ onSelectGenre }) => {
    // حالة للتحكم في عرض الشريط الجانبي عند الحجم الصغير
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar-app ${isOpen ? "open" : ""}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </div>
            <h3 className="sidebar-title">Genres</h3>
            <GenreList onSelectGenre={onSelectGenre} />
        </div>
    );
};

export default SideBar;
