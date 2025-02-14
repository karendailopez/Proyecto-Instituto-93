import PublicLayout from '@/Layouts/PublicLayout';

export default function Detalle({ articulo }) {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
            <PublicLayout onlyNav={true} />

            {Array.isArray(articulo) ? articulo.map((articulos, index) => (
    <div key={index}>
        <h1 className="text-3xl font-bold text-gray-900">{articulos.titulo}</h1>
        <p className="text-gray-600 mt-2">Por <span className="font-semibold">Autor</span> - 12 de Febrero, 2025</p>
        <img src="https://via.placeholder.com/800x400" alt="Imagen destacada" className="w-full h-64 object-cover rounded-lg mt-4"/>
        <div className="mt-6 text-gray-800 space-y-4">
            <p>{articulos.contenido}</p>
        </div>
    </div>
)) : (
    <div>
        <h1 className="text-3xl font-bold text-gray-900">{articulo.titulo}</h1>
        <p className="text-gray-600 mt-2">Por <span className="font-semibold">Autor</span> - 12 de Febrero, 2025</p>
        <img src="https://via.placeholder.com/800x400" alt="Imagen destacada" className="w-full h-64 object-cover rounded-lg mt-4"/>
        <div className="mt-6 text-gray-800 space-y-4">
            <p>{articulo.contenido}</p>
        </div>
    </div>
)}


        </div>
    );
}
