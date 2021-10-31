import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext'
import BookMarks from './bookMarks';
import Explore from './explore'
import Feed from './feed';
import Lists from './lists';
import Messages from './messages';
import More from './more';
import Notifications from './notifications';
import Profile from './profile';



const Content = () => {

    const { selectedSidebar, active } = useContext(SidebarContext);
    console.log(active)
    return (
        <div className="flex-1 mr-8">

            {selectedSidebar.path === "/explore" && <Explore />}
            {selectedSidebar.path === "/notifications" ? <Notifications /> : null}
            {selectedSidebar.path === "/messages" && <Messages />}
            {selectedSidebar.path === "/bookmarks" && <BookMarks />}
            {selectedSidebar.path === "/lists" && <Lists />}
            {selectedSidebar.path === "/profile" && <Profile />}
            {selectedSidebar.path === "/more" && <More />}
            {active === "Home" && < Feed />}

        </div>
    )
}

export default Content
