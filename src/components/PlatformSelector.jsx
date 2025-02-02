import usePlatform from "../hooks/usePlatform";

const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
    const { data, error } = usePlatform();

    if (error) return null;

    return (
        <>
            <button
                id="platformDropdownButton"
                data-dropdown-toggle="platformDropdown"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gry-600 dark:hover:bg-gary-700 dark:focus:ring-gray-800"
                type="button"
            >
                {selectPlatform?.name || "Platforms"}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div id="platformDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="platformDropdownButton">
                    {data.map((platform) => (
                        <li
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            key={platform.id}
                            onClick={() => onSelectPlatform(platform)}
                        >
                            {platform.slug}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default PlatformSelector;
