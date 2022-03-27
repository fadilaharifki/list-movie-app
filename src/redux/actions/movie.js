import axios from "axios";
import { CURRENT_PAGE, DETAIL_MOVIE, LIST_GENRE, LIST_MOVIE } from "../actionType";
import { BASE_URL } from "../../utils/URL";

export function fetchGenreMovie(payload) {
    return {
        type: LIST_GENRE,
        payload: payload
    }
}

export function setCurrentPage(payload) {
    return {
        type: CURRENT_PAGE,
        payload: payload
    }
}

export function fetchListMovie(payload) {
    return {
        type: LIST_MOVIE,
        payload: payload
    }
}

export function fetchDetailMovie(payload) {
    return {
        type: DETAIL_MOVIE,
        payload: payload
    }
}

export const fetchGenreMovies = () => {
    return (dispatch) => {
        fetchGenreRequest()
            .then(res => {
                dispatch(fetchGenreMovie(res.data.genres))
            })
            .catch(err => {
                console.log(err);
            })
    };
}

export const fetchListMovies = (page) => {
    return (dispatch) => {
        fetchListMovieRequest(page)
            .then(res => {
                dispatch(fetchListMovie(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    };
}

export const fetchDetailMovies = (id) => {
    return (dispatch) => {
        fetchdETAILMovieRequest(id)
            .then(res => {
                dispatch(fetchDetailMovie(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    };
}

const fetchGenreRequest = async () => {
    return await axios.get(BASE_URL + '/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49')
}

const fetchListMovieRequest = async (page) => {
    return await axios.get(BASE_URL + `/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`)
}

const fetchdETAILMovieRequest = async (id) => {
    return await axios.get(BASE_URL + `/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`)
}