// PlatformSelector.jsx
import "../styelComponents/PlatformSelector.css";
import { useState } from "react";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
    const { data = [], error } = usePlatform();
    const [isOpen, setIsOpen] = useState(false);

    if (error) return null;

    return (
        <div className="platform-selector">
            <button onClick={() => setIsOpen(!isOpen)} className="platform-button">
                {selectPlatform?.name || "Platforms"}
                <svg className={`dropdown-icon ${isOpen ? "rotate" : ""}`} viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {isOpen && (
                <div className="platform-menu">
                    <ul>
                        {data.map((platform) => (
                            <li key={platform.id} onClick={() => { onSelectPlatform(platform); setIsOpen(false); }} className="platform-item">
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