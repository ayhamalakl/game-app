import useGenres from "../hooks/useGenres";
import { useState } from "react";
import "../styelComponents/GenerList.css";

const GenreList = ({ onSelectGenre }) => {
    const { data, isLoading } = useGenres();
    const [selectedGenre, setSelectedGenre] = useState(null);

    if (isLoading)
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );

    return (
        <div className="genre-list">
            {data.map((genre) => (
                <button
                    key={genre.id}
                    type="button"
                    onClick={() => {
                        onSelectGenre(genre);
                        setSelectedGenre(genre.id);
                    }}
                    className={`genre-item ${selectedGenre === genre.id ? "active" : ""}`}
                >
                    <img
                        src={genre.image_background}
                        alt={genre.name}
                        className="genre-image"
                    />
                    <span>{genre.name}</span>
                </button>
            ))}
        </div>
    );
};

export default GenreList;
