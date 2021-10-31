import React, { useContext } from 'react'
import { MessagesContext } from '../../../context/MessagesContex';
import MessagesInput from './MessagesInput'

const MessagesList = () => {

    const { selectedFriend, messages } = useContext(MessagesContext);
    return (
        <div className="flex items-center justify-center border-r-2 min-w-full -ml-10">

            {
                !selectedFriend ? <div className="flex flex-col">
                    <span className="font-bold text-4xl w-96 flex break-words mb-2">You don't have a message selected</span>
                    <span className="w-80 text-gray-400 break-words mb-8">Choose one from your  existing messages, or start a new one.</span>
                    <button className="bg-primary-base  hover:bg-primary-dark cursor-pointer text-white font-bold text-xl rounded-full h-14 w-52">New message</button>
                </div>
                    : <MessagesInput
                        selectedFriend={selectedFriend}
                    />
            }


        </div>
    )
}

export default MessagesList
