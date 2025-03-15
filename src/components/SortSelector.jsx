import "../styelComponents/SortSelector.css";
import { useEffect, useRef, useReducer } from "react";
import toggleReducer from "../reducer/toggleReducer";

const SortSelector = ({ onSelectSortOrder, selectSortOrder }) => {
    const [state, dispatch] = useReducer(toggleReducer, { isOpen: false });
    const dropdownRef = useRef(null);

    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-release", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    const selectedSortLabel = sortOrders.find((order) => order.value === selectSortOrder)?.label || "Relevance";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dispatch({ type: "CLOSE" });
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="sort-selector" ref={dropdownRef}>
            <button onClick={() => dispatch({ type: "TOGGLE" })} className="sort-button" type="button">
                Order by: {selectedSortLabel}
                <svg className={`dropdown-icon ${state.isOpen ? "rotate" : ""}`} viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {state.isOpen && (
                <div className="sort-menu">
                    <ul>
                        {sortOrders.map((order) => (
                            <li key={order.value} className="sort-item" onClick={() => {
                                onSelectSortOrder(order.value);
                                dispatch({ type: "CLOSE" });
                            }}>
                                {order.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SortSelector;
