import TableActionColumn from "@/Components/Table/TableActionColumn.jsx";
import TableDataColumn from "@/Components/Table/TableDataColumn.jsx";
import TableDataEmpty from "@/Components/Table/TableDataEmpty.jsx";

export default function TableBody({ data, head, actions }) {
    const rowsHtml = data?.length > 0 ? data?.map( (x) => (
        <tr className="intro-x" key={x.id}>
            <TableDataColumn data={x} head={head}></TableDataColumn>

            { actions?.length > 0 && <TableActionColumn actions={ actions } data={x}></TableActionColumn> }
        </tr>)) : <TableDataEmpty head={head}></TableDataEmpty>;

    return <tbody>
    {rowsHtml}
    </tbody>
}
