import ApplicationLogo from "@/Components/ApplicationLogo.jsx";

export default function AppMobileMenu() {
    return <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
            <a href="" className="flex mr-auto">
                <ApplicationLogo height={30} width={30}></ApplicationLogo>
            </a>
            <a href="#" id="mobile-menu-toggler"> <i data-feather="bar-chart-2"
                                                     className="w-8 h-8 text-white transform -rotate-90"></i> </a>
        </div>
        <ul className="border-t border-theme-29 py-5 hidden">
            <li>
                <a href="#" className="menu menu--active">
                    <div className="menu__icon"><i data-feather="home"></i></div>
                    <div className="menu__title"> Dashboard <i data-feather="chevron-down"
                                                               className="menu__sub-icon transform rotate-180"></i>
                    </div>
                </a>
                <ul className="menu__sub-open">
                    <li>
                        <a href="index.html" className="menu menu--active">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Overview 1</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-2.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Overview 2</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-3.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Overview 3</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="box"></i></div>
                    <div className="menu__title"> Menu Layout <i data-feather="chevron-down"
                                                                 className="menu__sub-icon "></i></div>
                </a>
                <ul className="">
                    <li>
                        <a href="index.html" className="menu menu--active">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Side Menu</div>
                        </a>
                    </li>
                    <li>
                        <a href="simple-menu-light-dashboard-overview-1.html" className="menu menu--active">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Simple Menu</div>
                        </a>
                    </li>
                    <li>
                        <a href="top-menu-light-dashboard-overview-1.html" className="menu menu--active">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Top Menu</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="side-menu-light-inbox.html" className="menu">
                    <div className="menu__icon"><i data-feather="inbox"></i></div>
                    <div className="menu__title"> Inbox</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-file-manager.html" className="menu">
                    <div className="menu__icon"><i data-feather="hard-drive"></i></div>
                    <div className="menu__title"> File Manager</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-point-of-sale.html" className="menu">
                    <div className="menu__icon"><i data-feather="credit-card"></i></div>
                    <div className="menu__title"> Point of Sale</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-chat.html" className="menu">
                    <div className="menu__icon"><i data-feather="message-square"></i></div>
                    <div className="menu__title"> Chat</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-post.html" className="menu">
                    <div className="menu__icon"><i data-feather="file-text"></i></div>
                    <div className="menu__title"> Post</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-calendar.html" className="menu">
                    <div className="menu__icon"><i data-feather="calendar"></i></div>
                    <div className="menu__title"> Calendar</div>
                </a>
            </li>
            <li className="menu__devider my-6"></li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="edit"></i></div>
                    <div className="menu__title"> Crud <i data-feather="chevron-down" className="menu__sub-icon "></i>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-crud-data-list.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Data List</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-crud-form.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Form</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="users"></i></div>
                    <div className="menu__title"> Users <i data-feather="chevron-down" className="menu__sub-icon "></i>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-users-layout-1.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Layout 1</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-users-layout-2.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Layout 2</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-users-layout-3.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Layout 3</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="trello"></i></div>
                    <div className="menu__title"> Profile <i data-feather="chevron-down"
                                                             className="menu__sub-icon "></i></div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-profile-overview-1.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Overview 1</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-profile-overview-2.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Overview 2</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-profile-overview-3.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Overview 3</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="layout"></i></div>
                    <div className="menu__title"> Pages <i data-feather="chevron-down" className="menu__sub-icon "></i>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Wizards <i data-feather="chevron-down"
                                                                     className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-wizard-layout-1.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wizard-layout-2.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wizard-layout-3.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Blog <i data-feather="chevron-down"
                                                                  className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-blog-layout-1.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-blog-layout-2.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-blog-layout-3.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Pricing <i data-feather="chevron-down"
                                                                     className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-pricing-layout-1.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-pricing-layout-2.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 2</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Invoice <i data-feather="chevron-down"
                                                                     className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-invoice-layout-1.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-invoice-layout-2.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 2</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> FAQ <i data-feather="chevron-down"
                                                                 className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-faq-layout-1.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-faq-layout-2.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-faq-layout-3.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="login-light-login.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Login</div>
                        </a>
                    </li>
                    <li>
                        <a href="login-light-register.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Register</div>
                        </a>
                    </li>
                    <li>
                        <a href="main-light-error-page.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Error Page</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-update-profile.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Update profile</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-change-password.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Change Password</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li className="menu__devider my-6"></li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="inbox"></i></div>
                    <div className="menu__title"> Components <i data-feather="chevron-down"
                                                                className="menu__sub-icon "></i></div>
                </a>
                <ul className="">
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Table <i data-feather="chevron-down"
                                                                   className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-regular-table.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Regular Table</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-tabulator.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Tabulator</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Overlay <i data-feather="chevron-down"
                                                                     className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-modal.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Modal</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-slide-over.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Slide Over</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-notification.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Notification</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-accordion.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Accordion</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-button.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Button</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-alert.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Alert</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-progress-bar.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Progress Bar</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-tooltip.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Tooltip</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dropdown.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Dropdown</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-typography.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Typography</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-icon.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Icon</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-loading-icon.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Loading Icon</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="sidebar"></i></div>
                    <div className="menu__title"> Forms <i data-feather="chevron-down" className="menu__sub-icon "></i>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-regular-form.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Regular Form</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-datepicker.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Datepicker</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-tom-select.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Tom Select</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-file-upload.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> File Upload</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Wysiwyg Editor <i data-feather="chevron-down"
                                                                            className="menu__sub-icon "></i></div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-classic.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Classic</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-inline.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Inline</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-balloon.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Balloon</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-balloon-block.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Balloon Block</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-document.html" className="menu">
                                    <div className="menu__icon"><i data-feather="zap"></i></div>
                                    <div className="menu__title">Document</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-validation.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Validation</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="menu">
                    <div className="menu__icon"><i data-feather="hard-drive"></i></div>
                    <div className="menu__title"> Widgets <i data-feather="chevron-down"
                                                             className="menu__sub-icon "></i></div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-chart.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Chart</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-slider.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Slider</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-image-zoom.html" className="menu">
                            <div className="menu__icon"><i data-feather="activity"></i></div>
                            <div className="menu__title"> Image Zoom</div>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>;
}
