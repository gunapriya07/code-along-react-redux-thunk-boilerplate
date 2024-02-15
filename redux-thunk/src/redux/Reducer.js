import { FETCH_DATA } from "./ActionType";

const initState = {
    data: [],
};

const Reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_DATA:
            return { ...state, data: payload };
        default:
            return state;
    }
};

export default Reducer;
