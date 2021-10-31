import React, { useContext } from 'react'
import { MessagesContext } from '../../../context/MessagesContex';
import FriendInfo from './FriendInfo';

const MessageContent = () => {
    const { selectedFriend } = useContext(MessagesContext);
    console.log(selectedFriend)
    return (
        <div className="w-full min-h-screen">
            < FriendInfo />
            <div className="flex flex-row items-center" >
                <div className="pl-4">
                    <img src={selectedFriend.avatar}
                        className="w-10 h-10 rounded-full cursor-pointer"
                    ></img>
                </div>
                {
                    selectedFriend &&

                    <div className="flex w-max bg-gray-200 ml-4  text-gray-900 rounded-t-2xl rounded-r-2xl  cursor-pointer ">
                        <span className="p-4">{selectedFriend.text}</span>

                    </div>


                }
            </div>
        </div>
    )
}

export default MessageContent
