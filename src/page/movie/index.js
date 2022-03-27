import TableHeader from "../../components/Tables/TableHeader"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListMovies, fetchGenreMovies } from "../../redux/actions/movie"
import List from "./list"
import Pagination from "../../components/Tables/Pagination"

export default function Movie() {
    const dispatch = useDispatch()
    const { listMovie, currentPage } = useSelector((state) => state.movie)

    const [startPage, setStartPage] = useState(1)
    const [endPage, setEndPage] = useState(5)
    const [activePage, setActivePage] = useState(currentPage)

    useEffect(() => {
        dispatch(fetchGenreMovies())
        dispatch(fetchListMovies(activePage))
    }, [dispatch, activePage])

    return (
        <div className="p-10">
            <div className="py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">List Movie</h2>
            </div>
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Poster</TableHeader>
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
                                <List key={i} data={e} index={i} page={listMovie.page} />
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