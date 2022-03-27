import axios from "axios";
import { LIST_GENRE } from "../actionType";
import { BASE_URL } from "../../utils/URL";

export function fetchListMovie(payload) {
    return {
        type: LIST_GENRE,
        payload: payload
    }
}

export const fetchListMovies = () => {
    return (dispatch) => {
        fetchListGenreRequest(user)
            .then(res => {
                console.log(res);
                fetchListMovie(res)
            })
            .catch(err => {
                console.log(err);
            })
    };
}

const fetchListGenreRequest = async () => {
    return await axios.get(BASE_URL + '/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49')
}