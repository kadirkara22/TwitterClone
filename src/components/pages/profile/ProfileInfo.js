import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext';
import { JoinTakvimIcon } from '../../../icons/icon'

const ProfileInfo = () => {
    const { users } = useContext(UserContext);



    return (
        <div>

            <div>
                <img src={users[0].backgroundImage}
                    className="w-full h-48 cursor-pointer"
                ></img>
                <div className="flex flex-row justify-between -mt-16 pr-5 pl-5">
                    <div>
                        <img src={users[0].avatar}
                            className="w-36 h-36 rounded-full border-4 border-white cursor-pointer bg-white"></img>
                    </div>

                    <div className="flex items-center justify-center mt-20 font-semibold text-lg text-gray-900 border-2 cursor-pointer hover:bg-gray-200 border-gray-300 w-32 h-10 rounded-full">Edit profile</div>
                </div>
            </div>
            <div className="flex flex-col ml-5">
                <div className="font-bold text-2xl">{users[0].username}</div>
                <div className="text-gray-500 -mt-1">@{users[0].displayName}</div>
                <div className="mt-2 text-gray-800 text-xl">{users[0].description}</div>
                <div className="flex flex-row items-center mt-2 text-gray-500"><JoinTakvimIcon className="w-5 h-5" /> {users[0].joinedDate}</div>
                <div className="flex flex-row mt-4">
                    <div className="mr-5 hover:underline cursor-pointer"><span className="font-bold text-gray-600 text-lg">{users[0].following}</span><span className="text-gray-700"> Following</span> </div>
                    <div className="hover:underline cursor-pointer"><span className="font-bold text-gray-600 text-lg">{users[0].follower}</span><span className="text-gray-700"> Followers</span> </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
