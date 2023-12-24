import AppIcon from "@/Components/Icons/AppIcon.jsx";

export default function DropdownButtonItem({label, icon}) {


    return <a href="#"
              className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md dd-menu">
        <AppIcon name={icon} className="w-4 h-4 mr-2 dd-menu" /> {label}
    </a>
}
