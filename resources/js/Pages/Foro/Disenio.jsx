import React from 'react';
import { Feather } from 'react-feather';

const TopBar = () => {
  return (
    <div className="content">
      {/* BEGIN: Top Bar */}
      <div className="top-bar">
        {/* BEGIN: Breadcrumb */}
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          <a href="#">Application</a> 
          <Feather icon="chevron-right" className="breadcrumb__icon" />
          <a href="#" className="breadcrumb--active">Dashboard</a>
        </div>
        {/* END: Breadcrumb */}
        
        {/* BEGIN: Search */}
        <div className="intro-x relative mr-3 sm:mr-6">
          <div className="search hidden sm:block">
            <input 
              type="text" 
              className="search__input form-control border-transparent placeholder-theme-13" 
              placeholder="Search..."
            />
            <Feather icon="search" className="search__icon dark:text-gray-300" />
          </div>
          <a className="notification sm:hidden" href="#">
            <Feather icon="search" className="notification__icon dark:text-gray-300" />
          </a>
          <div className="search-result">
            <div className="search-result__content">
              <div className="search-result__content__title">Pages</div>
              <div className="mb-5">
                <a href="#" className="flex items-center">
                  <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                    <Feather icon="inbox" className="w-4 h-4" />
                  </div>
                  <div className="ml-3">Mail Settings</div>
                </a>
                <a href="#" className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                    <Feather icon="users" className="w-4 h-4" />
                  </div>
                  <div className="ml-3">Users & Permissions</div>
                </a>
                <a href="#" className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                    <Feather icon="credit-card" className="w-4 h-4" />
                  </div>
                  <div className="ml-3">Transactions Report</div>
                </a>
              </div>

              {/* Repeat similar structure for Users and Products */}

            </div>
          </div>
        </div>
        {/* END: Search */}

        {/* BEGIN: Notifications */}
        <div className="intro-x dropdown mr-auto sm:mr-6">
          <div className="dropdown-toggle notification notification--bullet cursor-pointer">
            <Feather icon="bell" className="notification__icon dark:text-gray-300" />
          </div>
          <div className="notification-content pt-2 dropdown-menu">
            <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
              <div className="notification-content__title">Notifications</div>
              <div className="cursor-pointer relative flex items-center ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img alt="User profile" className="rounded-full" src="dist/images/profile-4.jpg" />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                  </div>
                  <div className="w-full truncate text-gray-600 mt-0.5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                  </div>
                </div>
              </div>

              {/* Repeat similar structure for other notifications */}

            </div>
          </div>
        </div>
        {/* END: Notifications */}

        {/* BEGIN: Account Menu */}
        <div className="intro-x dropdown w-8 h-8">
          <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
            <img alt="User profile" src="dist/images/profile-2.jpg" />
          </div>
          <div className="dropdown-menu w-56">
            <div className="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white">
              <div className="p-4 border-b border-theme-27 dark:border-dark-3">
                <div className="font-medium">Kevin Spacey</div>
                <div className="text-xs text-theme-28 mt-0.5 dark:text-gray-600">Frontend Engineer</div>
              </div>
              <div className="p-2">
                <a href="#" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-gray-700">Profile</a>
              </div>
            </div>
          </div>
        </div>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </div>
  );
};

export default TopBar;
