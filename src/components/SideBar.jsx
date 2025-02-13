import GenreList from "./GenreList";

const SideBar = ({ onSelectGenre }) => {
    return (
        <div className="sidebar-app w-60 bg-white dark:bg-gray-900 p-4 text-gray-900 dark:text-white shadow-lg h-screen transition-all duration-300">
            {/* العنوان */}
            <h3 className="text-xl font-bold mb-4">Genres</h3>

            {/* قائمة التصنيفات */}
            <GenreList onSelectGenre={onSelectGenre} />
        </div>
    );
};

export default SideBar;
