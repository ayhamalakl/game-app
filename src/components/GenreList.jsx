import useGenres from "../hooks/useGenres";
import { useReducer } from "react";
import "../styelComponents/GenerList.css";
import genreReducer from "../reducer/genreReducer";

const GenreList = ({ onSelectGenre, isOpen }) => {
    const { data = [], isLoading, error } = useGenres();
    const [selectedGenre, dispatch] = useReducer(genreReducer, null);

    if (isLoading)
        return <div className="loader-container"><div className="loader"></div></div>;

    if (error)
        return <div className="error-message">
            <p className="error-title">Error loading genres</p>
            <p>{error.message}</p>
        </div>;

    if (!data.length)
        return <div className="error-message">No genres found</div>;

    return (
        <div className={`genre-list ${isOpen ? 'genre-list-open' : ''}`}>
            {data.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => {
                        onSelectGenre(genre);
                        dispatch({ type: "SELECT_GENRE", payload: genre.id });
                    }}
                    className={`genre-item ${selectedGenre === genre.id ? "active" : ""}`}
                >
                    <img src={genre.image_background} alt={genre.name} className="genre-image" />
                    <span className="genre-name">{genre.name}</span>
                </button>
            ))}
        </div>
    );
};

export default GenreList;