import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import {Head} from "@inertiajs/react";

export default function Index() {
    return <>
        <AdminLayout>
            <Head title="Dashboard"/>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-9">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    General Report
                                </h2>
                                <a href="" className="ml-auto flex items-center text-theme-1 dark:text-theme-10"> <i
                                    data-feather="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload Data </a>
                            </div>
                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="shopping-cart"
                                                   className="report-box__icon text-theme-10"></i>
                                                <div className="ml-auto">
                                                    <div
                                                        className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                                                        title="33% Higher than last month"> 33% <i
                                                        data-feather="chevron-up" className="w-4 h-4 ml-0.5"></i></div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                                            <div className="text-base text-gray-600 mt-1">Item Sales</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="credit-card"
                                                   className="report-box__icon text-theme-11"></i>
                                                <div className="ml-auto">
                                                    <div
                                                        className="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                                                        title="2% Lower than last month"> 2% <i
                                                        data-feather="chevron-down"
                                                        className="w-4 h-4 ml-0.5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">3.721</div>
                                            <div className="text-base text-gray-600 mt-1">New Orders</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="monitor"
                                                   className="report-box__icon text-theme-12"></i>
                                                <div className="ml-auto">
                                                    <div
                                                        className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                                                        title="12% Higher than last month"> 12% <i
                                                        data-feather="chevron-up" className="w-4 h-4 ml-0.5"></i></div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">2.149</div>
                                            <div className="text-base text-gray-600 mt-1">Total Products</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="user" className="report-box__icon text-theme-9"></i>
                                                <div className="ml-auto">
                                                    <div
                                                        className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                                                        title="22% Higher than last month"> 22% <i
                                                        data-feather="chevron-up" className="w-4 h-4 ml-0.5"></i></div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">152.040</div>
                                            <div className="text-base text-gray-600 mt-1">Unique Visitor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 mt-8">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Sales Report
                                </h2>
                                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                                    <i data-feather="calendar"
                                       className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i>
                                    <input type="text" className="datepicker form-control sm:w-56 box pl-10"></input>
                                </div>
                            </div>
                            <div className="intro-y box p-5 mt-12 sm:mt-5">
                                <div className="flex flex-col xl:flex-row xl:items-center">
                                    <div className="flex">
                                        <div>
                                            <div
                                                className="text-theme-19 dark:text-gray-300 text-lg xl:text-xl font-medium">$15,000
                                            </div>
                                            <div className="mt-0.5 text-gray-600 dark:text-gray-600">This Month</div>
                                        </div>
                                        <div
                                            className="w-px h-12 border border-r border-dashed border-gray-300 dark:border-dark-5 mx-4 xl:mx-5"></div>
                                        <div>
                                            <div
                                                className="text-gray-600 dark:text-gray-600 text-lg xl:text-xl font-medium">$10,000
                                            </div>
                                            <div className="mt-0.5 text-gray-600 dark:text-gray-600">Last Month</div>
                                        </div>
                                    </div>
                                    <div className="dropdown xl:ml-auto mt-5 xl:mt-0">
                                        <button className="dropdown-toggle btn btn-outline-secondary font-normal"
                                                aria-expanded="false"> Filter by Category <i data-feather="chevron-down"
                                                                                             className="w-4 h-4 ml-2"></i>
                                        </button>
                                        <div className="dropdown-menu w-40">
                                            <div
                                                className="dropdown-menu__content box dark:bg-dark-1 p-2 overflow-y-auto h-32">
                                                <a href=""
                                                   className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">PC
                                                    & Laptop</a> <a href=""
                                                                    className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Smartphone</a>
                                                <a href=""
                                                   className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Electronic</a>
                                                <a href=""
                                                   className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Photography</a>
                                                <a href=""
                                                   className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">Sport</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="report-chart">
                                    <canvas id="report-line-chart" height="169" className="mt-6"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Weekly Top Seller
                                </h2>
                                <a href="" className="ml-auto text-theme-1 dark:text-theme-10 truncate">Show More</a>
                            </div>
                            <div className="intro-y box p-5 mt-5">
                                <canvas className="mt-3" id="report-pie-chart" height="300"></canvas>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                        <span className="truncate">17 - 30 Years old</span>
                                        <div
                                            className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">62%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                                        <span className="truncate">31 - 50 Years old</span>
                                        <div
                                            className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">33%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                        <span className="truncate">+ 50 Years old</span>
                                        <div
                                            className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Sales Report
                                </h2>
                                <a href="" className="ml-auto text-theme-1 dark:text-theme-10 truncate">Show More</a>
                            </div>
                            <div className="intro-y box p-5 mt-5">
                                <canvas className="mt-3" id="report-donut-chart" height="300"></canvas>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                        <span className="truncate">17 - 30 Years old</span>
                                        <div
                                            className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">62%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                                        <span className="truncate">31 - 50 Years old</span>
                                        <div
                                            className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">33%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                        <span className="truncate">+ 50 Years old</span>
                                        <div
                                            className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span className="font-medium xl:ml-auto">10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-8 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Official Store
                                </h2>
                                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                                    <i data-feather="map-pin"
                                       className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i>
                                    <input type="text" className="form-control sm:w-40 box pl-10"
                                           placeholder="Filter by city"></input>
                                </div>
                            </div>
                            <div className="intro-y box p-5 mt-12 sm:mt-5">
                                <div>250 Official stores in 21 countries, click the marker to see location details.
                                </div>
                                <div className="report-maps mt-5 bg-gray-200 rounded-md"
                                     data-center="-6.2425342, 106.8626478"
                                     data-sources="/dist/json/location.json"></div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4 mt-6">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Weekly Best Sellers
                                </h2>
                            </div>
                            <div className="mt-5">
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template"
                                                 src="/storage/images/profile/default.jpg"></img>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">Johnny Depp</div>
                                            <div className="text-gray-600 text-xs mt-0.5">16 November 2021</div>
                                        </div>
                                        <div
                                            className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137
                                            Sales
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template"
                                                 src="/storage/images/profile/default.jpg"></img>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">John Travolta</div>
                                            <div className="text-gray-600 text-xs mt-0.5">22 July 2022</div>
                                        </div>
                                        <div
                                            className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137
                                            Sales
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template"
                                                 src="/storage/images/profile/default.jpg"></img>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">Christian Bale</div>
                                            <div className="text-gray-600 text-xs mt-0.5">11 October 2021</div>
                                        </div>
                                        <div
                                            className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137
                                            Sales
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template"
                                                 src="/storage/images/profile/default.jpg"></img>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium">Brad Pitt</div>
                                            <div className="text-gray-600 text-xs mt-0.5">29 April 2022</div>
                                        </div>
                                        <div
                                            className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137
                                            Sales
                                        </div>
                                    </div>
                                </div>
                                <a href=""
                                   className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">View
                                    More</a>
                            </div>
                        </div>
                        <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">Target Sales</div>
                                            <div className="text-gray-600 mt-1">300 Sales</div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                            <canvas id="report-donut-chart-1" width="90" height="90"></canvas>
                                            <div
                                                className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">20%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex">
                                        <div className="text-lg font-medium truncate mr-3">Social Media</div>
                                        <div
                                            className="py-1 px-2 flex items-center rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer ml-auto truncate">320
                                            Followers
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <canvas className="simple-line-chart-1 -ml-1" height="60"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">New Products</div>
                                            <div className="text-gray-600 mt-1">1450 Products</div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                            <canvas id="report-donut-chart-2" width="90" height="90"></canvas>
                                            <div
                                                className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">45%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex">
                                        <div className="text-lg font-medium truncate mr-3">Posted Ads</div>
                                        <div
                                            className="py-1 px-2 flex items-center rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer ml-auto truncate">180
                                            Campaign
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <canvas className="simple-line-chart-1 -ml-1" height="60"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Weekly Top Products
                                </h2>
                                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                    <button className="btn box flex items-center text-gray-700 dark:text-gray-300"><i
                                        data-feather="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to
                                        Excel
                                    </button>
                                    <button className="ml-3 btn box flex items-center text-gray-700 dark:text-gray-300">
                                        <i
                                            data-feather="file-text"
                                            className="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF
                                    </button>
                                </div>
                            </div>
                            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <table className="table table-report sm:mt-2">
                                    <thead>
                                    <tr>
                                        <th className="whitespace-nowrap">IMAGES</th>
                                        <th className="whitespace-nowrap">PRODUCT NAME</th>
                                        <th className="text-center whitespace-nowrap">STOCK</th>
                                        <th className="text-center whitespace-nowrap">STATUS</th>
                                        <th className="text-center whitespace-nowrap">ACTIONS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="intro-x">
                                        <td className="w-40">
                                            <div className="flex">
                                                <div className="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 16 November 2021"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 12 April 2021"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 15 October 2022"></img>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" className="font-medium whitespace-nowrap">Nikon Z6</a>
                                            <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">Photography
                                            </div>
                                        </td>
                                        <td className="text-center">50</td>
                                        <td className="w-40">
                                            <div className="flex items-center justify-center text-theme-6"><i
                                                data-feather="check-square" className="w-4 h-4 mr-2"></i> Inactive
                                            </div>
                                        </td>
                                        <td className="table-report__action w-56">
                                            <div className="flex justify-center items-center">
                                                <a className="flex items-center mr-3" href=""> <i
                                                    data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                <a className="flex items-center text-theme-6" href=""> <i
                                                    data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="intro-x">
                                        <td className="w-40">
                                            <div className="flex">
                                                <div className="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 22 July 2022"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 3 July 2022"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 27 November 2020"></img>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" className="font-medium whitespace-nowrap">Nikon Z6</a>
                                            <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">Photography
                                            </div>
                                        </td>
                                        <td className="text-center">50</td>
                                        <td className="w-40">
                                            <div className="flex items-center justify-center text-theme-6"><i
                                                data-feather="check-square" className="w-4 h-4 mr-2"></i> Inactive
                                            </div>
                                        </td>
                                        <td className="table-report__action w-56">
                                            <div className="flex justify-center items-center">
                                                <a className="flex items-center mr-3" href=""> <i
                                                    data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                <a className="flex items-center text-theme-6" href=""> <i
                                                    data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="intro-x">
                                        <td className="w-40">
                                            <div className="flex">
                                                <div className="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 11 October 2021"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 8 January 2022"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 5 December 2020"></img>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" className="font-medium whitespace-nowrap">Nikon Z6</a>
                                            <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">Photography
                                            </div>
                                        </td>
                                        <td className="text-center">50</td>
                                        <td className="w-40">
                                            <div className="flex items-center justify-center text-theme-9"><i
                                                data-feather="check-square" className="w-4 h-4 mr-2"></i> Active
                                            </div>
                                        </td>
                                        <td className="table-report__action w-56">
                                            <div className="flex justify-center items-center">
                                                <a className="flex items-center mr-3" href=""> <i
                                                    data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                <a className="flex items-center text-theme-6" href=""> <i
                                                    data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="intro-x">
                                        <td className="w-40">
                                            <div className="flex">
                                                <div className="w-10 h-10 image-fit zoom-in">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 29 April 2022"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 5 February 2021"></img>
                                                </div>
                                                <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                    <img alt="Rubick Tailwind HTML Admin Template"
                                                         className="tooltip rounded-full"
                                                         src="/storage/images/default.jpg"
                                                         title="Uploaded at 30 October 2022"></img>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="" className="font-medium whitespace-nowrap">Sony Master Series
                                                A9G</a>
                                            <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">Electronic
                                            </div>
                                        </td>
                                        <td className="text-center">50</td>
                                        <td className="w-40">
                                            <div className="flex items-center justify-center text-theme-6"><i
                                                data-feather="check-square" className="w-4 h-4 mr-2"></i> Inactive
                                            </div>
                                        </td>
                                        <td className="table-report__action w-56">
                                            <div className="flex justify-center items-center">
                                                <a className="flex items-center mr-3" href=""> <i
                                                    data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                <a className="flex items-center text-theme-6" href=""> <i
                                                    data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                <ul className="pagination">
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4"
                                                                                    data-feather="chevrons-left"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4"
                                                                                    data-feather="chevron-left"></i>
                                        </a>
                                    </li>
                                    <li><a className="pagination__link" href="">...</a></li>
                                    <li><a className="pagination__link" href="">1</a></li>
                                    <li><a className="pagination__link pagination__link--active" href="">2</a></li>
                                    <li><a className="pagination__link" href="">3</a></li>
                                    <li><a className="pagination__link" href="">...</a></li>
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4"
                                                                                    data-feather="chevron-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href=""> <i className="w-4 h-4"
                                                                                    data-feather="chevrons-right"></i>
                                        </a>
                                    </li>
                                </ul>
                                <select className="w-20 form-select box mt-3 sm:mt-0">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>35</option>
                                    <option>50</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-3">
                    <div className="2xl:border-l border-theme-5 -mb-10 pb-10">
                        <div className="2xl:pl-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3 2xl:mt-8">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Transactions
                                    </h2>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Johnny Depp</div>
                                                <div className="text-gray-600 text-xs mt-0.5">16 November 2021</div>
                                            </div>
                                            <div className="text-theme-6">-$131</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">John Travolta</div>
                                                <div className="text-gray-600 text-xs mt-0.5">22 July 2022</div>
                                            </div>
                                            <div className="text-theme-6">-$26</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Christian Bale</div>
                                                <div className="text-gray-600 text-xs mt-0.5">11 October 2021</div>
                                            </div>
                                            <div className="text-theme-9">+$41</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Brad Pitt</div>
                                                <div className="text-gray-600 text-xs mt-0.5">29 April 2022</div>
                                            </div>
                                            <div className="text-theme-6">-$125</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Christian Bale</div>
                                                <div className="text-gray-600 text-xs mt-0.5">7 October 2021</div>
                                            </div>
                                            <div className="text-theme-9">+$39</div>
                                        </div>
                                    </div>
                                    <a href=""
                                       className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">View
                                        More</a>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Recent Activities
                                    </h2>
                                    <a href="" className="ml-auto text-theme-1 dark:text-theme-10 truncate">Show
                                        More</a>
                                </div>
                                <div className="report-timeline mt-5 relative">
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Johnny Depp</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600 mt-1">Has joined the team</div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Leonardo DiCaprio</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600">
                                                <div className="mt-1">Added 3 new photos</div>
                                                <div className="flex mt-2">
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in"
                                                         title="Nikon Z6">
                                                        <img alt="Rubick Tailwind HTML Admin Template"
                                                             className="rounded-md border border-white"
                                                             src="/storage/images/default.jpg"></img>
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in"
                                                         title="Nikon Z6">
                                                        <img alt="Rubick Tailwind HTML Admin Template"
                                                             className="rounded-md border border-white"
                                                             src="/storage/images/default.jpg"></img>
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in"
                                                         title="Nikon Z6">
                                                        <img alt="Rubick Tailwind HTML Admin Template"
                                                             className="rounded-md border border-white"
                                                             src="/storage/images/default.jpg"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-x text-gray-500 text-xs text-center my-4">12 November</div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Al Pacino</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600 mt-1">Has changed <a
                                                className="text-theme-1 dark:text-theme-10" href="">Samsung Q90 QLED
                                                TV</a> price and description
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template"
                                                     src="/storage/images/profile/default.jpg"></img>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Al Pacino</div>
                                                <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-gray-600 mt-1">Has changed <a
                                                className="text-theme-1 dark:text-theme-10" href="">Nike
                                                Tanjun</a> description
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-auto">
                                        Important Notes
                                    </h2>
                                    <button data-carousel="important-notes" data-target="prev"
                                            className="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2">
                                        <i data-feather="chevron-left" className="w-4 h-4"></i></button>
                                    <button data-carousel="important-notes" data-target="next"
                                            className="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2">
                                        <i data-feather="chevron-right" className="w-4 h-4"></i></button>
                                </div>
                                <div className="mt-5 intro-x">
                                    <div className="box zoom-in">
                                        <div className="tiny-slider" id="important-notes">
                                            <div className="p-5">
                                                <div className="text-base font-medium truncate">Lorem Ipsum is simply
                                                    dummy
                                                    text
                                                </div>
                                                <div className="text-gray-500 mt-1">20 Hours ago</div>
                                                <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply
                                                    dummy
                                                    text of the printing and typesetting industry. Lorem Ipsum has been
                                                    the
                                                    industry's standard dummy text ever since the 1500s.
                                                </div>
                                                <div className="font-medium flex mt-5">
                                                    <button type="button" className="btn btn-secondary py-1 px-2">View
                                                        Notes
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-outline-secondary py-1 px-2 ml-auto">Dismiss
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <div className="text-base font-medium truncate">Lorem Ipsum is simply
                                                    dummy
                                                    text
                                                </div>
                                                <div className="text-gray-500 mt-1">20 Hours ago</div>
                                                <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply
                                                    dummy
                                                    text of the printing and typesetting industry. Lorem Ipsum has been
                                                    the
                                                    industry's standard dummy text ever since the 1500s.
                                                </div>
                                                <div className="font-medium flex mt-5">
                                                    <button type="button" className="btn btn-secondary py-1 px-2">View
                                                        Notes
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-outline-secondary py-1 px-2 ml-auto">Dismiss
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <div className="text-base font-medium truncate">Lorem Ipsum is simply
                                                    dummy
                                                    text
                                                </div>
                                                <div className="text-gray-500 mt-1">20 Hours ago</div>
                                                <div className="text-gray-600 text-justify mt-1">Lorem Ipsum is simply
                                                    dummy
                                                    text of the printing and typesetting industry. Lorem Ipsum has been
                                                    the
                                                    industry's standard dummy text ever since the 1500s.
                                                </div>
                                                <div className="font-medium flex mt-5">
                                                    <button type="button" className="btn btn-secondary py-1 px-2">View
                                                        Notes
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Schedules
                                    </h2>
                                    <a href=""
                                       className="ml-auto text-theme-1 dark:text-theme-10 truncate flex items-center">
                                        <i
                                            data-feather="plus" className="w-4 h-4 mr-1"></i> Add New Schedules </a>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-x box">
                                        <div className="p-5">
                                            <div className="flex">
                                                <i data-feather="chevron-left" className="w-5 h-5 text-gray-600"></i>
                                                <div className="font-medium text-base mx-auto">April</div>
                                                <i data-feather="chevron-right" className="w-5 h-5 text-gray-600"></i>
                                            </div>
                                            <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                                                <div className="font-medium">Su</div>
                                                <div className="font-medium">Mo</div>
                                                <div className="font-medium">Tu</div>
                                                <div className="font-medium">We</div>
                                                <div className="font-medium">Th</div>
                                                <div className="font-medium">Fr</div>
                                                <div className="font-medium">Sa</div>
                                                <div className="py-0.5 rounded relative text-gray-600">29</div>
                                                <div className="py-0.5 rounded relative text-gray-600">30</div>
                                                <div className="py-0.5 rounded relative text-gray-600">31</div>
                                                <div className="py-0.5 rounded relative">1</div>
                                                <div className="py-0.5 rounded relative">2</div>
                                                <div className="py-0.5 rounded relative">3</div>
                                                <div className="py-0.5 rounded relative">4</div>
                                                <div className="py-0.5 rounded relative">5</div>
                                                <div className="py-0.5 bg-theme-18 dark:bg-theme-9 rounded relative">6
                                                </div>
                                                <div className="py-0.5 rounded relative">7</div>
                                                <div
                                                    className="py-0.5 bg-theme-1 dark:bg-theme-1 text-white rounded relative">8
                                                </div>
                                                <div className="py-0.5 rounded relative">9</div>
                                                <div className="py-0.5 rounded relative">10</div>
                                                <div className="py-0.5 rounded relative">11</div>
                                                <div className="py-0.5 rounded relative">12</div>
                                                <div className="py-0.5 rounded relative">13</div>
                                                <div className="py-0.5 rounded relative">14</div>
                                                <div className="py-0.5 rounded relative">15</div>
                                                <div className="py-0.5 rounded relative">16</div>
                                                <div className="py-0.5 rounded relative">17</div>
                                                <div className="py-0.5 rounded relative">18</div>
                                                <div className="py-0.5 rounded relative">19</div>
                                                <div className="py-0.5 rounded relative">20</div>
                                                <div className="py-0.5 rounded relative">21</div>
                                                <div className="py-0.5 rounded relative">22</div>
                                                <div className="py-0.5 bg-theme-17 dark:bg-theme-11 rounded relative">23
                                                </div>
                                                <div className="py-0.5 rounded relative">24</div>
                                                <div className="py-0.5 rounded relative">25</div>
                                                <div className="py-0.5 rounded relative">26</div>
                                                <div className="py-0.5 bg-theme-14 dark:bg-theme-12 rounded relative">27
                                                </div>
                                                <div className="py-0.5 rounded relative">28</div>
                                                <div className="py-0.5 rounded relative">29</div>
                                                <div className="py-0.5 rounded relative">30</div>
                                                <div className="py-0.5 rounded relative text-gray-600">1</div>
                                                <div className="py-0.5 rounded relative text-gray-600">2</div>
                                                <div className="py-0.5 rounded relative text-gray-600">3</div>
                                                <div className="py-0.5 rounded relative text-gray-600">4</div>
                                                <div className="py-0.5 rounded relative text-gray-600">5</div>
                                                <div className="py-0.5 rounded relative text-gray-600">6</div>
                                                <div className="py-0.5 rounded relative text-gray-600">7</div>
                                                <div className="py-0.5 rounded relative text-gray-600">8</div>
                                                <div className="py-0.5 rounded relative text-gray-600">9</div>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 dark:border-dark-5 p-5">
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                                <span className="truncate">UI/UX Workshop</span>
                                                <div
                                                    className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                                <span className="font-medium xl:ml-auto">23th</span>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <div
                                                    className="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full mr-3"></div>
                                                <span className="truncate">VueJs Frontend Development</span>
                                                <div
                                                    className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                                <span className="font-medium xl:ml-auto">10th</span>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                                <span className="truncate">Laravel Rest API</span>
                                                <div
                                                    className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                                <span className="font-medium xl:ml-auto">31th</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    </>;
}
