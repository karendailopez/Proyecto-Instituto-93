export default function TableDataEmpty({head}) {
    return <tr>
        <td colSpan={head.length + 1} className="text-center">No hay registros</td>
    </tr>
}
