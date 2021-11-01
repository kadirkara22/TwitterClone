import React from 'react'
import { ListArrowIcon } from '../../../icons/icon'
import ProfileContent from './ProfileContent'
import ProfileInfo from './ProfileInfo'
import ProfileNav from './ProfileNav'

const Profile = () => {
    return (
        <div className="w-full h-screen border-l-2 border-r-2">
            <div className="flex flex-row items-center border-b-2">
                <div className="flex items-center justify-center w-10 h-10 mr-2 ml-2 rounded-full hover:bg-gray-200">
                    <ListArrowIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-row items-center justify-between cursor-pointer">

                    <div className="pl-4 py-2 w-96">
                        <div className="font-bold text-xl">Kadir Kara</div>
                        <div className="text-gray-600 text-sm">2021 Tweets</div>
                    </div>

                </div>
            </div>
            <ProfileInfo />
            <ProfileNav />
            <ProfileContent />
        </div>
    )
}

export default Profile
