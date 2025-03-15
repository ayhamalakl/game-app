import "../styelComponents/SideBar.css";
import GenreList from "./GenreList";
import { useReducer } from "react";
import toggleReducer from "../reducer/toggleReducer";

const SideBar = ({ onSelectGenre }) => {
    const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });

    return (
        <div className={`sidebar-app ${state.isOpen ? "open" : ""}`}>
            <h3 className="sidebar-title">Genres</h3>
            <button onClick={() => dispatch({ type: "TOGGLE" })} className="sidebar-toggle-btn">
                {/* Toggle Sidebar */}
            </button>
            <GenreList onSelectGenre={onSelectGenre} />
        </div>
    );
};

export default SideBar;
