import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TableCell from "../../components/Tables/TableCell"
import TableHeader from "../../components/Tables/TableHeader"
import { fetchGenreMovies } from "../../redux/actions/movie"

export default function Home(params) {
    const dispatch = useDispatch()
    const { listGenre } = useSelector((state) => state.movie)

    useEffect(() => {
        dispatch(fetchGenreMovies())
    }, [dispatch])

    return (
        <div className="p-10">
            <div className="py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">List Genre</h2>
            </div>
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <TableHeader>No</TableHeader>
                        <TableHeader>Genre</TableHeader>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                    {
                        listGenre?.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <TableCell>{i + 1}</TableCell>
                                    <TableCell>{e.name}</TableCell>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}