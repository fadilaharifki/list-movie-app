import TableCell from "../../components/Tables/TableCell"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BASE_URL_IMAGE } from "../../utils/URL";
import { setCurrentPage } from "../../redux/actions/movie";

export default function List({ data, page }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [genres, setGenres] = useState([])
    const { listGenre } = useSelector((state) => state.movie)

    useEffect(() => {
        let arrGenres = []

        data.genre_ids.forEach(elm => {
            listGenre.forEach((el) => {
                if (elm === el.id) {
                    arrGenres.push(el.name)
                }
            })
        });
        setGenres(arrGenres)
    }, [data, listGenre])

    const toDetail = () => {
        dispatch(setCurrentPage(page))
        navigate(`/detail/${data.id}`, { state: { id: data.id, backdrop_path: data.backdrop_path, poster_path: data.poster_path } })
    }

    return (
        <tr className="cursor-pointer hover:bg-gray-200" onClick={toDetail}>
            <TableCell>{data.title}</TableCell>
            <TableCell>
                <img src={`${BASE_URL_IMAGE}${data.poster_path}`} width={80} alt="poster" />
            </TableCell>
            <td className="p-2 whitespace-nowrap font-medium text-gray-800">
                {
                    genres.map((e, i) => {
                        return (
                            <p key={i}>{e}</p>
                        )
                    })
                }
            </td>
            <TableCell>{data.original_language}</TableCell>

            <TableCell>{data.popularity}</TableCell>
            <TableCell>{data.release_date}</TableCell>
        </tr>
    )
}