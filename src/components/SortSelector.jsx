import "../styelComponents/SortSelector.css";
import { useState, useEffect, useRef } from "react";

const SortSelector = ({ onSelectSortOrder, selectSortOrder }) => {
    const [isOpen, setIsOpen] = useState(false);
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
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div class="sort-selector" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} class="sort-button" type="button">
                Order by: {selectedSortLabel}
                <svg class={`dropdown-icon ${isOpen ? "rotate" : ""}`} viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {isOpen && (
                <div class="sort-menu">
                    <ul>
                        {sortOrders.map((order) => (
                            <li key={order.value} class="sort-item" onClick={() => {
                                onSelectSortOrder(order.value);
                                setIsOpen(false);
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