import "../styelComponents/SideBar.css";
import GenreList from "./GenreList";
import { useState } from "react";

const SideBar = ({ onSelectGenre }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar-app ${isOpen ? "open" : ""}`}>
            <h3 className="sidebar-title">Genres</h3>
            <GenreList onSelectGenre={onSelectGenre} />
        </div>
    );
};

export default SideBar;
