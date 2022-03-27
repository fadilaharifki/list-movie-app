function TableHeader(props) {
    return (
        <th className="p-2 whitespace-nowrap font-semibold text-left">
            {props.children}
        </th>
    );
}

export default TableHeader;
