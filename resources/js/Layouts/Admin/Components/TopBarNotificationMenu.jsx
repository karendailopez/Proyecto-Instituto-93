import { useContextMenu } from "@/Core/Hooks/useContextMenu";

export function TopBarNotificationMenu({show, setShow}) {

    const { style } = useContextMenu({
        show,
        setShow,
        menuWidth: 350,
        padding: 110,
        top: 64,
        classes: ['notification-menu', 'notification-btn']
     });

    return  <div className={`notification-content notification-menu pt-2 dropdown-menu ${ show === true ? 'show' : '' } `} style={ style }>
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
}
