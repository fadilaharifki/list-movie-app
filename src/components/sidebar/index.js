import { Link } from "react-router-dom";

export default function Sidebar(params) {
    return (
        <div className="bg-[#242424] min-h-full text-white p-5 text-xl font-bold">
            <div className="h-20">Sidebar</div>
            <div className="flex flex-col">
                <Link to={"/"} className="cursor-pointer">List Genre</Link>
                <Link to={"/listmovie"} className="cursor-pointer">List Movie</Link>
            </div>
        </div>
    )
}