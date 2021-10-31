import React, { useContext, useState } from 'react'
import { SidebarContext } from '../../context/SidebarContext';


const Menu = ({ key, name, Icon, path, active, handleMenuClick, counter }) => {
    const isActive = active === name;

    const { selectedSidebar } = useContext(SidebarContext)


    const [homeCounter, setHomeCounter] = useState("");
    const [exploreCounter, setExploreCounter] = useState("");
    const [notificationsCounter, setNotificationsCounter] = useState("12");
    const [messagesCounter, setMessagesCounter] = useState("");

    return (

        <li className="group cursor-pointer mr-4" onClick={() => handleMenuClick(name)} >
            <a href={name.toLowerCase()}
                className="block text-2xl pointer-events-none">
                <div className="inline-block">
                    <div className="flex items-center group-hover:bg-gray-200  rounded-full pl-3 pr-8 py-3">
                        <div className="static">
                            <Icon className="w-7 h-7 " active={isActive} />
                            <span className="min-w-min absolute bg-primary-dark text-white text-sm rounded-full px-1 m-3 -my-9">{name === "Notifications" ? notificationsCounter : ""} </span>
                        </div>
                        <span className={`ml-5
                        ${isActive ? "font-bold" : ""}`}>{name}</span>
                    </div>

                </div>
            </a>
        </li>



    )
}

export default Menu;
