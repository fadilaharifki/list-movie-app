import { Link } from "react-router-dom";

export default function Sidebar(params) {
    return (
        <div className="bg-[#242424] h-[100%] text-white p-5 text-xl font-bold">
            <div className="h-15 p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width={40} height={40} alt="Alex Shatov" /></div>
                    <div className="font-medium text-white">Admin</div>
                </div>
            </div>
            <div>
                <div className="relative pb-5">
                    <hr
                        className="min-w-full"
                        style={{ borderTop: "2px solid white" }}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <Link to={"/"} className="cursor-pointer hover:text-orange-700 font-medium text-white">List Genre</Link>
                <Link to={"/listmovie"} className="cursor-pointer hover:text-orange-700 font-medium text-white">List Movie</Link>
            </div>
        </div>
    )
}