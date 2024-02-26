export default function PaginatorData({ data }) {
    return <div className="hidden md:block mx-auto text-gray-600">
            Mostrando {data.from} a {data.to} de {data.total} registros
    </div>;
}
