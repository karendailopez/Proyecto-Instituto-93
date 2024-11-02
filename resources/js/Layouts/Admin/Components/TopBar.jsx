import AppIcon from "@/Components/Icons/AppIcon.jsx";
import Breadcrumb from "./Breadcrumb.jsx";

export default function ({ breadcrumb, onMenuOpen }) {
    return <div className="top-bar">
        <Breadcrumb breadcrumb={ breadcrumb }></Breadcrumb>

        <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
                <input type="text" className="search__input form-control border-transparent placeholder-theme-13"
                       placeholder="Search..."></input>
                <AppIcon name="search" className="search__icon dark:text-gray-300"></AppIcon>
            </div>
            <a className="notification sm:hidden" href="">
                <AppIcon name="search" className="notification__icon dark:text-gray-300"></AppIcon>
            </a>
            <div className="search-result">
                <div className="search-result__content">
                    <div className="search-result__content__title">Pages</div>
                    <div className="mb-5">
                        <a href="" className="flex items-center">
                            <div
                                className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                                <i className="w-4 h-4" data-feather="inbox"></i></div>
                            <div className="ml-3">Mail Settings</div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div
                                className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                                <i className="w-4 h-4" data-feather="users"></i></div>
                            <div className="ml-3">Users & Permissions</div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div
                                className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                                <i className="w-4 h-4" data-feather="credit-card"></i></div>
                            <div className="ml-3">Transactions Report</div>
                        </a>
                    </div>
                    <div className="search-result__content__title">Users</div>
                    <div className="mb-5">
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                     src="/storage/images/profile/default.jpg"></img>
                            </div>
                            <div className="ml-3">Kevin Spacey</div>
                            <div
                                className="ml-auto w-48 truncate text-gray-600 text-xs text-right">kevinspacey@left4code.com
                            </div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                     src="/storage/images/profile/default.jpg"></img>
                            </div>
                            <div className="ml-3">Al Pacino</div>
                            <div
                                className="ml-auto w-48 truncate text-gray-600 text-xs text-right">alpacino@left4code.com
                            </div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                     src="/storage/images/profile/default.jpg"></img>
                            </div>
                            <div className="ml-3">Kate Winslet</div>
                            <div
                                className="ml-auto w-48 truncate text-gray-600 text-xs text-right">katewinslet@left4code.com
                            </div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                     src="/storage/images/profile/default.jpg"></img>
                            </div>
                            <div className="ml-3">Christian Bale</div>
                            <div
                                className="ml-auto w-48 truncate text-gray-600 text-xs text-right">christianbale@left4code.com
                            </div>
                        </a>
                    </div>
                    <div className="search-result__content__title">Products</div>
                    <a href="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/default.jpg"></img>
                        </div>
                        <div className="ml-3">Nike Air Max 270</div>
                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Sport &amp; Outdoor
                        </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/default.jpg"></img>
                        </div>
                        <div className="ml-3">Apple MacBook Pro 13</div>
                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">PC &amp; Laptop</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/default.jpg"></img>
                        </div>
                        <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                        <div
                            className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet
                        </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/default.jpg"></img>
                        </div>
                        <div className="ml-3">Dell XPS 13</div>
                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">PC &amp; Laptop</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="intro-x dropdown notification-btn mr-auto sm:mr-6" onClick={ () => onMenuOpen('notifications') }>
            <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button"
                 aria-expanded="false">
                <AppIcon name="bell" className="notification__icon dark:text-gray-300"></AppIcon>
            </div>
        </div>
        <div className="intro-x user-btn dropdown w-8 h-8" onClick={ () => onMenuOpen('users') } >
            <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                 role="button" aria-expanded="false">
                <img alt="Rubick Tailwind HTML Admin Template" src="/storage/images/profile/default.jpg"></img>
            </div>
        </div>
    </div>;
}
