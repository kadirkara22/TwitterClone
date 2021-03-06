import React from 'react'
import { SettingsIcon } from '../../../icons/icon'
import All from './All'

const Notifications = () => {
    return (
        <div className="min-h-screen border-r-2 border-l-2">
            < div className="cursor-pointer bg-white sticky top-0" >
                <div className=" flex flex-row items-center justify-between">
                    <span className="font-bold text-xl m-4">Notifications</span>
                    <div className="flex items-center justify-center w-10 h-10 mr-2 cursor-pointer hover:bg-gray-200 rounded-full">
                        <SettingsIcon className="w-6 h-6 " />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="w-72 h-14 flex items-center justify-center font-bold   hover:bg-gray-200">All</div>
                    <div className="w-72 h-14 flex items-center justify-center font-bold  hover:bg-gray-200">Mentions</div>
                </div>
            </div>
            <All />
        </div>
    )
}

export default Notifications;
