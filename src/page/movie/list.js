import TableCell from "../../components/Tables/TableCell"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function List({ data }) {
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
        console.log(arrGenres);

        setGenres(arrGenres)
    }, [])

    const toDetail = () => {
        navigate(`/detail/${data.id}`, { state: { id: data.id } })
    }

    return (
        <tr className="cursor-pointer hover:bg-gray-200" onClick={toDetail}>
            <TableCell>{data.title}</TableCell>
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