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

    // إغلاق القائمة عند النقر خارجها
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
        <div className="relative inline-block text-left" ref={dropdownRef}>
        {/* زر القائمة */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-48 px-5 py-2.5 
                       bg-gray-200 text-gray-900 hover:bg-gray-300 
                       dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 
                       rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 
                       dark:focus:ring-gray-800 font-medium text-sm"
            type="button"
        >
            Order by: {selectedSortLabel}
            <svg className={`w-2.5 h-2.5 ml-2 transition-transform transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
        </button>
    
        {/* القائمة المنبثقة */}
        {isOpen && (
            <div className="absolute z-10 mt-2 w-48 bg-white text-gray-900 
                            dark:bg-gray-700 dark:text-white 
                            divide-y divide-gray-100 dark:divide-gray-600 
                            rounded-lg shadow-lg">
                <ul className="py-2 text-sm">
                    {sortOrders.map((order) => (
                        <li
                            key={order.value}
                            className="flex px-4 py-2 cursor-pointer 
                                       hover:bg-gray-100 dark:hover:bg-gray-600 
                                       dark:hover:text-white"
                            onClick={() => {
                                onSelectSortOrder(order.value);
                                setIsOpen(false);
                            }}
                        >
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
