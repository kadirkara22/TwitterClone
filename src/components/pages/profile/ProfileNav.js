import React from 'react'

const ProfileNav = () => {
    return (
        <div className="flex flex-row items-center justify-evenly cursor-pointer mt-4 border-b-2">
            <div className="hover:bg-gray-200 font-bold text-gray-800 w-full h-16 flex items-center justify-center">Tweets</div>
            <div className="hover:bg-gray-200 font-bold text-gray-800 w-full h-16 flex items-center justify-center">Tweets & replies</div>
            <div className="hover:bg-gray-200 font-bold text-gray-800 w-full h-16 flex items-center justify-center">Media</div>
            <div className="hover:bg-gray-200 font-bold text-gray-800 w-full h-16 flex items-center justify-center">Reactions</div>
        </div>
    )
}

export default ProfileNav
