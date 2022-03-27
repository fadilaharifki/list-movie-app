import { CURRENT_PAGE, DETAIL_MOVIE, LIST_GENRE, LIST_MOVIE } from "../actionType";

const initialState = {
    listGenre: [],
    listMovie: {},
    detailMovie: {},
    currentPage: 1
}

export default function movie(state = initialState, action) {
    const { type, payload } = action
    if (type === LIST_GENRE) {
        return { ...state, listGenre: payload }
    } else if (type === LIST_MOVIE) {
        return { ...state, listMovie: payload }
    } else if (type === DETAIL_MOVIE) {
        return { ...state, detailMovie: payload }
    } else if (type === CURRENT_PAGE) {
        return { ...state, currentPage: payload }
    }
    return state
}