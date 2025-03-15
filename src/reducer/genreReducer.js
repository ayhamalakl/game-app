const genreReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_GENRE":
            return action.payload;
        case "RESET_GENRE":
            return null;
        default:
            return state;
    }
};

export default genreReducer;
