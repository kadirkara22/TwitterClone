import React, { useContext } from 'react'
import { SidebarContext } from '../../../context/SidebarContext';
import { UserContext } from '../../../context/UserContext';
import { InfoIcon } from '../../../icons/icon';
import MessageContent from '../messages/MessageContent';

const BookMarks = () => {
    const { users } = useContext(UserContext);


    return (
        <div className="w-full h-screen border-l-2 border-r-2">
            <div className="flex flex-row items-center justify-between border-b-2 cursor-pointer bg-white sticky top-0">
                <div className="pl-4 py-2">
                    <div className="font-bold text-xl">BookMarks</div>
                    <div className="text-gray-600 text-sm">@{users[0].displayName}</div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 mr-2 rounded-full hover:bg-gray-200">
                    <InfoIcon className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}

export default BookMarks;
