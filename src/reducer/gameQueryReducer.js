const gameQueryReducer = (state, action) => {
    switch (action.type) {
        case "SET_SEARCH_TEXT":
            return { ...state, searchText: action.payload };
        case "SET_GENRE":
            return { ...state, genre: action.payload };
        case "SET_PLATFORM":
            return { ...state, platform: action.payload };
        case "SET_SORT_ORDER":
            return { ...state, sortOrder: action.payload };
        default:
            return state;
    }
};

export default gameQueryReducer;
