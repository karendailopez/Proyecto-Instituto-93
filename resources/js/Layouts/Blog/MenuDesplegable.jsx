import { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia';

export default function DropdownNav({ grupo }) {
    const [show, setShow] = useState(false);

    // Cerrar el menú si se hace clic fuera
    const onDocumentClick = ({ target }) => {
        if (!target.classList.contains('dd-menu')) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', onDocumentClick);
        return () => {
            document.removeEventListener('click', onDocumentClick);
        };
    }, []);

    return (
        <li className="nav-item dropdown dd-menu">
            <a
                className="nav-link dropdown-toggle dd-menu"
                href="#"
                role="button"
                onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                }}
                aria-expanded={show}
            >
                {grupo.descripcion}
            </a>

            {show && (
                <ul className="dropdown-menu show dd-menu" style={{ position: 'absolute', zIndex: 1000 }}>
                    {grupo.categorias && grupo.categorias.length > 0 ? (
                        grupo.categorias.map((categoria) => (
                            <li key={categoria.id}>
                                <a
                                    className="dropdown-item dd-menu"
                                    href={route('blog.categorias',  categoria.id )}
                                >
                                    {categoria.descripcion}
                                </a>
                            </li>
                        ))
                    ) : (
                        <li><span className="dropdown-item">No hay categorías disponibles</span></li>
                    )}
                </ul>
            )}
        </li>
    );
}

