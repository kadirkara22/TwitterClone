import React from 'react'
import { ArrowIcon, MessageInfoIcon } from '../../icons/icon'

const Messages = () => {
    return (
        <div className="flex flex-row items-center justify-between cursor-pointer bg-white shadow-2xl rounded-tl-xl rounded-tr-xl h-20 w-96 fixed bottom-0 ml-44">
            <div>
                <span className="font-bold text-2xl pl-5">Messages</span>
            </div>
            <div className="flex flex-row items-center mr-5">
                <div className="flex items-center justify-center hover:bg-gray-300 w-10 h-10 rounded-full">
                    <MessageInfoIcon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center hover:bg-gray-300 w-10 h-10 rounded-full">
                    <ArrowIcon className="w-6 h-6" />
                </div>
            </div>
        </div>
    )
}

export default Messages
