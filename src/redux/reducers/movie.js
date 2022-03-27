import { LIST_GENRE, LIST_MOVIE } from "../actionType";

const initialState = {
    listGenre: [],
    listMovie: {},
}

export default function movie(state = initialState, action) {
    const { type, payload } = action
    if (type === LIST_GENRE) {
        return { ...state, listGenre: payload }
    } else if (type === LIST_MOVIE) {
        return { ...state, listMovie: payload }
    }
    return state
}