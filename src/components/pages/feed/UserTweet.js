import React from 'react'



const UserTweet = ({ name, Icon }) => {
    return (

        <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-lighttest cursor-pointer">
            <Icon className="w-5 h-5 text-primary-base" />
        </div>
    )
}

export default UserTweet
