import AppIcon from "@/Components/Icons/AppIcon.jsx";
import Breadcrumb from "../../Admin/Components/Breadcrumb";

export default function ({ breadcrumb }) {
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
        <div className="intro-x dropdown mr-auto sm:mr-6">
            <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button"
                 aria-expanded="false">
                <AppIcon name="bell" className="notification__icon dark:text-gray-300"></AppIcon>
            </div>
            <div className="notification-content pt-2 dropdown-menu">
                <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
                    <div className="notification-content__title">Notifications</div>
                    <div className="cursor-pointer relative flex items-center ">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/profile/default.jpg"></img>
                            <div
                                className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="#" className="font-medium truncate mr-5">Kevin Spacey</a>
                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                            </div>
                            <div className="w-full truncate text-gray-600 mt-0.5">There are many variations of passages
                                of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                                injected humour, or randomi
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/profile/default.jpg"></img>
                            <div
                                className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="#" className="font-medium truncate mr-5">Al Pacino</a>
                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a
                                reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/profile/default.jpg"></img>
                            <div
                                className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="#" className="font-medium truncate mr-5">Kate Winslet</a>
                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                            </div>
                            <div className="w-full truncate text-gray-600 mt-0.5">There are many variations of passages
                                of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                                injected humour, or randomi
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/profile/default.jpg"></img>
                            <div
                                className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="#" className="font-medium truncate mr-5">Christian Bale</a>
                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a
                                reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"
                                 src="/storage/images/profile/default.jpg"></img>
                            <div
                                className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="#" className="font-medium truncate mr-5">Johnny Depp</a>
                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-gray-600 mt-0.5">Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard
                                dummy text ever since the 1500
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="intro-x dropdown w-8 h-8">
            <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                 role="button" aria-expanded="false">
                <img alt="Rubick Tailwind HTML Admin Template" src="/storage/images/profile/default.jpg"></img>
            </div>
            <div className="dropdown-menu w-56">
                <div className="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white">
                    <div className="p-4 border-b border-theme-27 dark:border-dark-3">
                        <div className="font-medium">Kevin Spacey</div>
                        <div className="text-xs text-theme-28 mt-0.5 dark:text-gray-600">Frontend Engineer</div>
                    </div>
                    <div className="p-2">
                        <a href=""
                           className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <AppIcon name="user" className="w-4 h-4 mr-2"></AppIcon> Profile </a>
                        <a href=""
                           className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <AppIcon name="edit" className="w-4 h-4 mr-2"></AppIcon> Add Account </a>
                        <a href=""
                           className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <AppIcon name="lock" className="w-4 h-4 mr-2"></AppIcon> Reset Password </a>
                        <a href=""
                           className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <AppIcon name="help-circle" className="w-4 h-4 mr-2"></AppIcon> Help </a>
                    </div>
                    <div className="p-2 border-t border-theme-27 dark:border-dark-3">
                        <a href=""
                           className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <AppIcon name="toggle-right" className="w-4 h-4 mr-2"></AppIcon> Logout </a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
