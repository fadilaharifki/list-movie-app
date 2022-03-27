function PaginationItem(props) {
    const items = [];

    for (let x = props.startPage; x <= props.endPage; x++) {
        items.push(
            <li key={x}>
                <div
                    // href="#"
                    onClick={() => {
                        props.setActivePage(x)
                        if (x === 1) {
                            props.setStartPage(1)
                            props.setEndPage(x + 4)
                        } else if (x === 2) {
                            props.setStartPage(1)
                            props.setEndPage(x + 3)
                        } else if (x === props.totalPage - 2) {
                            props.setStartPage(props.totalPage - 4)
                            props.setEndPage(props.totalPage)
                        } else if (x === props.totalPage - 1) {
                            props.setStartPage(props.totalPage - 4)
                            props.setEndPage(props.totalPage)
                        } else if (x === props.totalPage) {
                            props.setStartPage(props.totalPage - 4)
                            props.setEndPage(props.totalPage)
                        } else {
                            props.setStartPage(x - 2)
                            props.setEndPage(x + 2)
                        }
                    }}
                    className={`first:ml-0 cursor-pointer text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${props.activePage === x ? "bg-orange-500 text-white" : "bg-white"} hover:bg-orange-500 hover:border-orange-500 hover:text-white`}
                >
                    {x}
                </div>
            </li>
        );
    }

    return items;
}

function Pagination(props) {
    return (
        <div className="p-5">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap justify-end">
                    <li>
                        <div
                            onClick={() => {
                                props.setEndPage(5)
                                props.setStartPage(1)
                                props.setActivePage(1)
                            }}
                            className=" cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                        >
                            {"<<"}
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                if (props.activePage <= 3) {
                                    props.setEndPage(5)
                                    props.setStartPage(1)
                                }
                                props.setActivePage(
                                    props.startPage === 1
                                        ? props.startPage
                                        : props.activePage - 1
                                )
                            }
                            }
                            className="cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                        >
                            {"<"}
                        </div>
                    </li>
                    <PaginationItem
                        startPage={props.startPage}
                        setStartPage={props.setStartPage}
                        endPage={props.endPage}
                        setEndPage={props.setEndPage}
                        activePage={props.activePage}
                        setActivePage={props.setActivePage}
                        totalPage={props.totalPage}
                    />
                    <li>
                        <div
                            onClick={() => {
                                if (props.activePage >= 3) {
                                    props.setEndPage(props.activePage + 3)
                                    props.setStartPage(props.activePage - 1)
                                }

                                props.setActivePage(
                                    props.activePage === props.totalPage
                                        ? props.totalPage
                                        : props.activePage + 1
                                )
                            }}
                            className="cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                        >
                            {">"}
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                props.setEndPage(props.totalPage)
                                props.setStartPage(props.totalPage - 4)
                                props.setActivePage(props.totalPage)
                            }}
                            className="cursor-pointer hover:bg-orange-500 hover:border-orange-500 hover:text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                        >
                            {">>"}

                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
