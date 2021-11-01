import React from 'react'
import { InfoIcon, ListArrowIcon, NewListIcon, SettingsIcon } from '../../../icons/icon'

const Lists = () => {
    return (
        <div className="w-full h-screen border-l-2 border-r-2">
            <div className="flex flex-row items-center border-b-2 bg-white sticky top-0">
                <div className="flex items-center justify-center w-10 h-10 mr-2 ml-2 rounded-full hover:bg-gray-200">
                    <ListArrowIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-row items-center justify-between cursor-pointer">

                    <div className="pl-4 py-2 w-96">
                        <div className="font-bold text-xl">Lists</div>
                        <div className="text-gray-600 text-sm">@kadirkara22</div>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 ml-10 rounded-full hover:bg-gray-200">
                        <NewListIcon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200">
                        <InfoIcon className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lists
