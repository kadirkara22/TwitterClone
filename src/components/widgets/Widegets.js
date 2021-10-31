import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext'
import { SearchIcon } from '../../icons/icon'
import Messages from './Messages'
import Search from './Search'

import Trends from './Trends'
import WhoFollow from './WhoFollow'


const Widegets = () => {
    const { selectedSidebar } = useContext(SidebarContext);

    return (
        <div className="min-h-screen w-96">
            {
                selectedSidebar.path !== "/explore" && selectedSidebar.path !== "/messages" && <Search />
            }
            {
                selectedSidebar.path !== "/explore" && selectedSidebar.path !== "/messages" && <Trends />
            }
            {
                selectedSidebar.path !== "/messages" && <WhoFollow />
            }
            {
                selectedSidebar.path !== "/messages" && <Messages />
            }






        </div>
    )
}

export default Widegets;
