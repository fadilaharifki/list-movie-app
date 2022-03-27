function TableCell(props) {
    return (
        <td
            className="p-2 whitespace-nowrap font-medium text-gray-800"
        >
            {props.children}
        </td>
    );
}

export default TableCell;
