import { useRef } from "react";

const SearchInput = ({ onSearch }) => {
    const ref = useRef(null);

    return (
        <form
            className="w-full"
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <div className="relative">
                {/* أيقونة البحث */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                    </svg>
                </div>
                {/* حقل الإدخال */}
                <input
                    ref={ref}
                    type="search"
                    id="search"
                    className="block w-full p-3 pl-10 text-sm rounded-lg border focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition 
                               bg-gray-100 border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder="Search..."
                    required
                />
            </div>
        </form>
    );
};

export default SearchInput;
