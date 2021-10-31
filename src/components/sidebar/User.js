import React from 'react'
import { InfoIcon } from '../../icons/icon'

const User = () => {
    return (

        <div className="flex flex-row justify-between items-center mb-6 hover:bg-gray-200 cursor-pointer rounded-full pt-3 py-2 px-4 mr-4 transform transition-colors duration-300">
            <div className="flex">
                <img src="https://pbs.twimg.com/profile_images/654717275413413892/suoRxAIA_400x400.jpg"
                    alt="Profile"
                    className="w-11 h-11 rounded-full"
                ></img>
                <div className="flex flex-col px-3 pl-4">
                    <span className="font-bold text-l text-black">KadirKara</span>
                    <span className="text-m text-gray-dark">@kadirkara22</span>
                </div>
            </div>
            <InfoIcon className="w-5 h-5" />


        </div>

    )
}

export default User
