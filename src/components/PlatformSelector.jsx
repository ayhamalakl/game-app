import { useState } from "react";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
    const { data, error } = usePlatform();
    const [isOpen, setIsOpen] = useState(false);

    if (error) return null;

    return (
          <div className="relative inline-block text-left">
    {/* زر القائمة */}
    <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-44 px-5 py-2.5 
                   bg-gray-200 text-gray-900 hover:bg-gray-300 
                   dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 
                   rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 
                   dark:focus:ring-gray-800 font-medium text-sm"
        type="button"
    >
        {selectPlatform?.name || "Platforms"}
        <svg className="w-2.5 h-2.5 ml-2 transition-transform transform" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
    </button>

    {/* القائمة المنبثقة */}
    {isOpen && (
        <div className="absolute z-10 mt-2 w-44 bg-white text-gray-900 
                        dark:bg-gray-700 dark:text-white 
                        divide-y divide-gray-100 dark:divide-gray-600 
                        rounded-lg shadow-lg">
            <ul className="py-2 text-sm">
                {data.map((platform) => (
                    <li
                        key={platform.id}
                        onClick={() => {
                            onSelectPlatform(platform);
                            setIsOpen(false);
                        }}
                        className="flex items-center px-4 py-2 cursor-pointer 
                                   hover:bg-gray-100 dark:hover:bg-gray-600 
                                   dark:hover:text-white"
                    >
                        <img src={platform.image_background} alt="" className="w-6 h-6 rounded-full mr-2" />
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
