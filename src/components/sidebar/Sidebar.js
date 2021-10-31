import React, { useContext, useState } from 'react'
import Menu from './Menu';
import { BookMarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon, ProfileIcon, TwitterIcon } from '../../icons/icon';
import User from './User';
import { SidebarContext } from '../../context/SidebarContext';

export const menus = [
    {
        name: "Home",
        path: "/",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        path: "/explore",
        icon: ExploreIcon,
    },
    {
        name: "Notifications",
        path: "/notifications",
        icon: NotificationsIcon,
    },
    {
        name: "Messages",
        path: "/messages",
        icon: MessagesIcon,
    },
    {
        name: "BookMarks",
        path: "/bookmarks",
        icon: BookMarksIcon,
    },
    {
        name: "Lists",
        path: "/lists",
        icon: ListsIcon,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: ProfileIcon,
    },
    {
        name: "More",
        path: "/more",
        icon: MoreIcon,
    }
]
const Sidebar = () => {

    const { selectSidebar, active, handleMenuClick } = useContext(SidebarContext)




    return (
        <div className="flex flex-col items-start justify-between w-72 h-screen sticky top-0">
            <div>
                <div className="mt-1 mb-3 ml-1  flex items-center justify-center cursor-pointer w-14 h-14 hover:bg-primary-light rounded-full transform transition-colors duration-200"><TwitterIcon /></div>
                <div className="my-0">
                    <div className="mb-1">
                        <ul>
                            {
                                menus.map(({ name, icon, path }) => (
                                    <Menu key={name} name={name} Icon={icon} path={path} active={active} handleMenuClick={handleMenuClick} />
                                ))
                            }
                        </ul>
                    </div>
                    <button className="bg-primary-base hover:bg-primary-dark h-16 text-1xl text-white font-bold rounded-full mt-1  py-3 px-8 w-10/12 transform transition-colors duration-200">Tweet</button>
                </div>
            </div>
            <User />
        </div>
    )
}

export default Sidebar;
