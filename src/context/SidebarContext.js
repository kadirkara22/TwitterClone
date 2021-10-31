import React, { useState } from "react";

export const menus = [
    {
        name: "Home",
        path: "/",

    },
    {
        name: "Explore",
        path: "/explore",

    },
    {
        name: "Notifications",
        path: "/notifications",

    },
    {
        name: "Messages",
        path: "/messages",

    },
    {
        name: "BookMarks",
        path: "/bookmarks",

    },
    {
        name: "Lists",
        path: "/lists",

    },
    {
        name: "Profile",
        path: "/profile",

    },
    {
        name: "More",
        path: "/more",

    }
]

export const SidebarContext = React.createContext();
const SidebarContextProvider = (props) => {

    const [selectedSidebar, setSelectedSidebar] = useState("/")

    const selectSidebar = (name) => {
        const selectedSidebar = menus.find((e) => e.name === name);

        setSelectedSidebar(selectedSidebar)
    }

    return (
        <SidebarContext.Provider value={{ selectedSidebar, selectSidebar }}>
            {props.children}
        </SidebarContext.Provider>
    )
}
export default SidebarContextProvider;