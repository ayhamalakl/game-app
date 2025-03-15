import "../styelComponents/PlatformSelector.css";
import { useReducer } from "react";
import usePlatform from "../hooks/usePlatform";
import toggleReducer from "../reducer/toggleReducer";

const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
    const { data = [], error } = usePlatform();
    const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });

    if (error) return null;

    return (
        <div className="platform-selector">
            <button onClick={() => dispatch({ type: "TOGGLE" })} className="platform-button">
                {selectPlatform?.name || "Platforms"}
                <svg className={`dropdown-icon ${state.isOpen ? "rotate" : ""}`} viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {state.isOpen && (
                <div className="platform-menu">
                    <ul>
                        {data.map((platform) => (
                            <li key={platform.id} onClick={() => { onSelectPlatform(platform); dispatch({ type: "CLOSE" }); }} className="platform-item">
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

export default PlatformSelector;
