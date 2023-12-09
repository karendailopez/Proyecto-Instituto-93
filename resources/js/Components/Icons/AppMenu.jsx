import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import AppIcon from "@/Components/Icons/AppIcon.jsx";

export default function AppMenu() {
    return <nav className="side-nav">
        <a href="" className="intro-x flex items-center pl-5 pt-4">
            <ApplicationLogo height={30} width={30}></ApplicationLogo>
            <span className="hidden xl:block text-white text-lg ml-3"> Ru<span
                className="font-medium">bick</span> </span>
        </a>
        <div className="side-nav__devider my-6"></div>
        <ul>
            <li>
                <a href="#.html" className="side-menu side-menu--active">
                    <div className="side-menu__icon"> <AppIcon name="home"></AppIcon></div>
                    <div className="side-menu__title">
                        Dashboard
                        <div className="side-menu__sub-icon transform rotate-180"> <AppIcon name="chevron-down"></AppIcon>
                        </div>
                    </div>
                </a>
                <ul className="side-menu__sub-open">
                    <li>
                        <a href="index.html" className="side-menu side-menu--active">
                            <div className="side-menu__icon"><AppIcon name="activity"></AppIcon> </div>
                            <div className="side-menu__title"> Overview 1</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-2.html" className="side-menu">
                            <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                            <div className="side-menu__title"> Overview 2</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-3.html" className="side-menu">
                            <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                            <div className="side-menu__title"> Overview 3</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><AppIcon name="box"></AppIcon></div>
                    <div className="side-menu__title">
                        Menu Layout
                        <div className="side-menu__sub-icon "><AppIcon name="chevron-down"></AppIcon></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="index.html" className="side-menu">
                            <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                            <div className="side-menu__title"> Side Menu</div>
                        </a>
                    </li>
                    <li>
                        <a href="simple-menu-light-dashboard-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                            <div className="side-menu__title"> Simple Menu</div>
                        </a>
                    </li>
                    <li>
                        <a href="top-menu-light-dashboard-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                            <div className="side-menu__title"> Top Menu</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="side-menu-light-inbox.html" className="side-menu">
                    <div className="side-menu__icon"><AppIcon name="inbox"></AppIcon></div>
                    <div className="side-menu__title"> Inbox</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-file-manager.html" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="hard-drive"></i></div>
                    <div className="side-menu__title"> File Manager</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-point-of-sale.html" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="credit-card"></i></div>
                    <div className="side-menu__title"> Point of Sale</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-chat.html" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="message-square"></i></div>
                    <div className="side-menu__title"> Chat</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-post.html" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="file-text"></i></div>
                    <div className="side-menu__title"> Post</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-calendar.html" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="calendar"></i></div>
                    <div className="side-menu__title"> Calendar</div>
                </a>
            </li>
            <li className="side-nav__devider my-6"></li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="edit"></i></div>
                    <div className="side-menu__title">
                        Crud
                        <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-crud-data-list.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Data List</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-crud-form.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Form</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="users"></i></div>
                    <div className="side-menu__title">
                        Users
                        <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-users-layout-1.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Layout 1</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-users-layout-2.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Layout 2</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-users-layout-3.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Layout 3</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="trello"></i></div>
                    <div className="side-menu__title">
                        Profile
                        <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-profile-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Overview 1</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-profile-overview-2.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Overview 2</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-profile-overview-3.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Overview 3</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="layout"></i></div>
                    <div className="side-menu__title">
                        Pages
                        <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                Wizards
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-wizard-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wizard-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wizard-layout-3.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                Blog
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-blog-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-blog-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-blog-layout-3.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                Pricing
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-pricing-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-pricing-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                Invoice
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-invoice-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-invoice-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                FAQ
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-faq-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-faq-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-faq-layout-3.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="login-light-login.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Login</div>
                        </a>
                    </li>
                    <li>
                        <a href="login-light-register.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Register</div>
                        </a>
                    </li>
                    <li>
                        <a href="main-light-error-page.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Error Page</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-update-profile.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Update profile</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-change-password.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Change Password</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li className="side-nav__devider my-6"></li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="inbox"></i></div>
                    <div className="side-menu__title">
                        Components
                        <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                Table
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-regular-table.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Regular Table</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-tabulator.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Tabulator</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                Overlay
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-modal.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Modal</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-slide-over.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Slide Over</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-notification.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Notification</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-accordion.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Accordion</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-button.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Button</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-alert.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Alert</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-progress-bar.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Progress Bar</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-tooltip.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Tooltip</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dropdown.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Dropdown</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-typography.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Typography</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-icon.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Icon</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-loading-icon.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Loading Icon</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="sidebar"></i></div>
                    <div className="side-menu__title">
                        Forms
                        <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-regular-form.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Regular Form</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-datepicker.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Datepicker</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-tom-select.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Tom Select</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-file-upload.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> File Upload</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title">
                                Wysiwyg Editor
                                <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-classic.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Classic</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-inline.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Inline</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-balloon.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Balloon</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-balloon-block.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Balloon Block</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-document.html" className="side-menu">
                                    <div className="side-menu__icon"><i data-feather="zap"></i></div>
                                    <div className="side-menu__title">Document</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-validation.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Validation</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="side-menu">
                    <div className="side-menu__icon"><i data-feather="hard-drive"></i></div>
                    <div className="side-menu__title">
                        Widgets
                        <div className="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-chart.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Chart</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-slider.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Slider</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-image-zoom.html" className="side-menu">
                            <div className="side-menu__icon"><i data-feather="activity"></i></div>
                            <div className="side-menu__title"> Image Zoom</div>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>;
}
