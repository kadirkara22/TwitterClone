import React, { useContext } from 'react'
import { MessagesContext } from '../../../context/MessagesContex';
import { JoinTakvimIcon } from '../../../icons/icon';

const FriendInfo = () => {
    const { handleMessageClick, selectedFriend, messages } = useContext(MessagesContext);
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 cursor-pointer m-6 h-40 border-b-2">
            <div className="mb-1">
                <span className="font-bold un4">{selectedFriend.username}</span>
                <span className="text-gray-600">@{selectedFriend.displayName}</span>
            </div>
            <div className="mb-1 text-gray-600">
                <span>Frontend Developer</span>
            </div>
            <div className="flex flex-row justify-center items-center mb-1 text-gray-600">
                <div><span className="font-bold">1,250</span> Following</div>
                <span className="w-2"></span>
                <div><span className="font-bold"> 6,250</span> Follows</div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <JoinTakvimIcon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">Joined April 2011</span>
            </div>
        </div>
    )
}

export default FriendInfo
