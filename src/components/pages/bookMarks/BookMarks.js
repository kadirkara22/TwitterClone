import React, { useContext } from 'react'
import { SidebarContext } from '../../../context/SidebarContext';
import { InfoIcon } from '../../../icons/icon';
import MessageContent from '../messages/MessageContent';

const BookMarks = () => {



    return (
        <div className="w-full h-screen border-l-2 border-r-2">
            <div className="flex flex-row items-center justify-between border-b-2 cursor-pointer bg-white sticky top-0">
                <div className="pl-4 py-2">
                    <div className="font-bold text-xl">BookMarks</div>
                    <div className="text-gray-600 text-sm">@kadirkara22</div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 mr-2 rounded-full hover:bg-gray-200">
                    <InfoIcon className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}

export default BookMarks;
