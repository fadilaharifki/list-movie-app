import TableHeader from "../../components/Tables/TableHeader"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListMovies, fetchGenreMovies } from "../../redux/actions/movie"
import List from "./list"
import Pagination from "../../components/Tables/Pagination"

export default function Movie() {
    const dispatch = useDispatch()
    const { listMovie } = useSelector((state) => state.movie)

    const [startPage, setStartPage] = useState(1)
    const [endPage, setEndPage] = useState(5)
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        dispatch(fetchGenreMovies())
        dispatch(fetchListMovies(activePage))
    }, [dispatch, activePage])

    return (
        <div className="p-10">
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Genre</TableHeader>
                        <TableHeader>Language</TableHeader>
                        <TableHeader>Popularity</TableHeader>
                        <TableHeader>Release</TableHeader>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                    {
                        listMovie?.results?.map((e, i) => {
                            return (
                                <List key={i} data={e} index={i} />
                            )
                        })
                    }
                </tbody>
            </table>
            <Pagination
                startPage={startPage}
                setStartPage={setStartPage}
                endPage={endPage}
                setEndPage={setEndPage}
                activePage={activePage}
                setActivePage={setActivePage}
                totalPage={listMovie.total_pages}
            />
        </div>
    )
}