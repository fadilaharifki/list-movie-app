import { LIST_GENRE } from "../actionType";

const initialState = {
    listGenre: [],
}

export default function movie(state = initialState, action) {
    const { type, payload } = action
    if (type === LIST_GENRE) {
        return { ...state, listGenre: payload }
    }
    return state
}