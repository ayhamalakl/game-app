export const GameHeading = ({ selectGenre, selectPlatform }) => {
    const heading = `${selectGenre?.name || ""} ${selectPlatform?.name || ""} Games`;

    return <h1 className="text-4xl font-extrabold">{heading}</h1>;
};
