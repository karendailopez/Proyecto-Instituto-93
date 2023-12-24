
export default function Paginator() {
    return <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
        <ul className="pagination">
            <li>
                <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevrons-left"></i>
                </a>
            </li>
            <li>
                <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevron-left"></i>
                </a>
            </li>
            <li><a className="pagination__link" href="">...</a></li>
            <li><a className="pagination__link" href="">1</a></li>
            <li><a className="pagination__link pagination__link--active" href="">2</a></li>
            <li><a className="pagination__link" href="">3</a></li>
            <li><a className="pagination__link" href="">...</a></li>
            <li>
                <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevron-right"></i>
                </a>
            </li>
            <li>
                <a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevrons-right"></i>
                </a>
            </li>
        </ul>
        <select className="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
        </select>
    </div>;
}
