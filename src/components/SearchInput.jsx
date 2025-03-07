import { useRef } from "react";
import "../styelComponents/SearchInput.css";

const SearchInput = ({ onSearch, theme }) => {
    const ref = useRef(null);
    
    return (
        <form 
            class={`search-form ${theme === "dark" ? "dark" : "light"}`}
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <label htmlFor="search" class="sr-only">
                Search
            </label>
            <div class="search-container">
                {/* أيقونة البحث */}
                <div class="search-icon">
                    <svg
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
                    class="search-input"
                    placeholder="Search..."
                    required
                />
            </div>
        </form>
    );
};

export default SearchInput;
