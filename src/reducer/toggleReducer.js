const toggleReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { isOpen: !state.isOpen };
        case "CLOSE":
            return { isOpen: false };
        default:
            return state;
    }
};

export default toggleReducer;
