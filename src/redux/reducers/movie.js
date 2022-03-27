import { ADD_EDUCATION, ADD_EXPERIENCE, EDUCATION, EXPERIENCE, REMOVE_EDUCATION, REMOVE_EXPERIENCE, LIST_GENRE } from "../actionType";

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