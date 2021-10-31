import React, { useContext } from 'react'
import { MessagesContext } from '../../../context/MessagesContex';
import { MessageProfileInfoIcon } from '../../../icons/icon'

const MessageHeader = () => {
    const { selectedFriend } = useContext(MessagesContext);
    return (
        <div className="flex flex-row items-center justify-between sticky top-0 bg-white border-b-2 px-4 h-16 mt-2">
            <div className="flex flex-row items-center justify-center">
                <div>
                    <img src={selectedFriend.avatar}
                        className="w-5 h-5 rounded-full cursor-pointer"
                    ></img>
                </div>
                <div className="flex flex-col pl-4">
                    <span className="font-bold">{selectedFriend.username}</span>
                    <span className="text-gray-600 text-sm">@{selectedFriend.displayName}</span>
                </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-gray-200">
                <MessageProfileInfoIcon className="w-6 h-6" />
            </div>


        </div>
    )
}

export default MessageHeader
