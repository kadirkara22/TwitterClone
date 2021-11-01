import React from 'react'
import { JoinTakvimIcon } from '../../../icons/icon'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://resimdiyari.com/_data/i/upload/2012/10/11/20121011142538-0d933501-me.jpg"
                    className="w-full h-48 cursor-pointer"
                ></img>
                <div className="flex flex-row justify-between -mt-16 pr-5 pl-5">
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/654717275413413892/suoRxAIA_400x400.jpg"
                            className="w-36 h-36 rounded-full border-4 border-white cursor-pointer"></img>
                    </div>

                    <div className="flex items-center justify-center mt-20 font-semibold text-lg text-gray-900 border-2 cursor-pointer hover:bg-gray-200 border-gray-300 w-32 h-10 rounded-full">Edit profile</div>
                </div>
            </div>
            <div className="flex flex-col ml-5">
                <div className="font-bold text-2xl">Kadir Kara</div>
                <div className="text-gray-500 -mt-1">@kadirkara22</div>
                <div className="mt-2 text-gray-800 text-xl">YTÜ Beşiktaş</div>
                <div className="flex flex-row items-center mt-2 text-gray-500"><JoinTakvimIcon className="w-5 h-5" /> Joined April 2011</div>
                <div className="flex flex-row mt-4">
                    <div className="mr-5 hover:underline cursor-pointer"><span className="font-bold text-gray-600 text-lg">1,553</span><span className="text-gray-700"> Following</span> </div>
                    <div className="hover:underline cursor-pointer"><span className="font-bold text-gray-600 text-lg">107</span><span className="text-gray-700"> Followers</span> </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
