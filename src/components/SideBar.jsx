import GenreList from "./GenreList";

const SideBar = ({ onSelectGenre }) => {
    return (
        <>
            <div className="sidebar-app ">
                <h3 className="text-bold">Genres</h3>
                <GenreList onSelectGenre={onSelectGenre} />
            </div>
        </>
    );
};

export default SideBar;
