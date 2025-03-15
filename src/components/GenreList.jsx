// GenreList.jsx
import useGenres from "../hooks/useGenres";
import { useReducer } from "react";
import genreReducer from "../reducer/genreReducer"; // استدعاء الـ reducer
import "../styelComponents/GenerList.css";

const GenreList = ({ onSelectGenre }) => {
    const { data = [], isLoading } = useGenres();
    const [selectedGenre, dispatch] = useReducer(genreReducer, null); // استبدال useState

    if (isLoading)
        return <div className="loader-container"><div className="loader"></div></div>;

    return (
        <div className="genre-list">
            {data.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => {
                        onSelectGenre(genre);
                        dispatch({ type: "SELECT_GENRE", payload: genre.id }); // استخدام dispatch
                    }}
                    className={`genre-item ${selectedGenre === genre.id ? "active" : ""}`}
                >
                    <img src={genre.image_background} alt={genre.name} className="genre-image" />
                    <span>{genre.name}</span>
                </button>
            ))}
        </div>
    );
};

export default GenreList;
