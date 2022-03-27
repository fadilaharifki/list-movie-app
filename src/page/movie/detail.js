import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { fetchDetailMovies } from "../../redux/actions/movie";
import { BASE_URL_IMAGE } from "../../utils/URL";

export default function Detail() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { detailMovie } = useSelector((state) => state.movie)

    useEffect(() => {
        dispatch(fetchDetailMovies(location?.state?.id))
    }, [dispatch, location])

    const backPage = () => {
        navigate(-1)
    }

    return (
        <div className={`mx-5 p-5 h-full rounded-lg bg-[#242424] text-white`}>
            < div className="flex flex-row py-4 justify-between" >
                <h2 className="font-semibold text-white text-2xl">Detail Movie</h2>
                <div onClick={backPage} className="font-semibold text-white text-xl cursor-pointer hover:text-orange-700">Back</div>
            </div >
            <div>
                <div className="relative pb-5">
                    <hr
                        className="min-w-full"
                        style={{ borderTop: "2px solid white" }}
                    />
                </div>
            </div>
            <div className="flex flex-row ">
                <img src={`${BASE_URL_IMAGE}${location?.state?.poster_path}`} width={300} alt="poster" />
                <div className="ml-5">
                    <div className="font-semibold text-white text-3xl">{detailMovie?.title}</div>
                    <div className="flex flex-row">
                        {
                            detailMovie?.genres?.map((e, i) => {
                                return (
                                    <div key={i}>
                                        {
                                            i !== detailMovie?.genres.length - 1 ? <div className="mr-2">{e.name},</div> : <div className="mr-2">and {e.name}</div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="font-semibold text-white">Rating : {detailMovie?.vote_average}</div>
                    <div className="mt-5">
                        <div className="font-semibold text-white">Overview</div>
                        <div>{detailMovie?.overview}</div>
                    </div>
                    <div className="mt-5">
                        <div className="font-semibold text-white">Status :</div>
                        <div>{detailMovie?.status}</div>
                    </div>
                    <div className="mt-5">
                        <div className="font-semibold text-white">Release Date :</div>
                        <div>{detailMovie?.release_date}</div>
                    </div>
                    <div className="mt-5">
                        <div className="font-semibold text-white">Production Countries :</div>
                        <div className="flex flex-row">
                            {
                                detailMovie?.production_countries?.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            {
                                                i !== detailMovie?.production_countries?.length - 1 ? <div className="mr-2">{e.name},</div> : <div className="mr-2">{e.name}</div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="font-semibold text-white">Production Companies :</div>
                        <div className="flex flex-row">
                            {
                                detailMovie?.production_companies?.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            {
                                                i !== detailMovie?.production_companies?.length - 1 ? <div className="mr-2">{e.name},</div> : <div className="mr-2">{e.name}</div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}