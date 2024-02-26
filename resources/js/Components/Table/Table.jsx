import Paginator from "@/Components/Table/Paginator.jsx";
import Search from "@/Components/Table/Search.jsx";
import TableHead from "@/Components/Table/TableHead.jsx";
import TableBody from "@/Components/Table/TableBody.jsx";
import PaginatorData from "@/Components/Table/PaginatorData.jsx";

export default function Table({ children, head, rows, actions, paginate }) {
    const rowsData = paginate ? rows.data : rows;

    return <>
        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                { children }

                { paginate && <PaginatorData data={rows}></PaginatorData>}

                <Search path={rows.path}></Search>
            </div>

            <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                <table className="table table-report -mt-2">
                    <TableHead head={head} options={rows} hasAction={ actions?.length > 0 }></TableHead>
                    <TableBody head={head} data={rowsData} actions={ actions }></TableBody>
                </table>
            </div>
        </div>

        {paginate && <Paginator paginator={rows}></Paginator>}
    </>;
}
