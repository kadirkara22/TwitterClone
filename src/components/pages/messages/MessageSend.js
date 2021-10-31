import React, { useContext, useEffect, useState } from 'react'
import db from '../../../firebase';
import { GIFIcon, ImageIcon, ImojiIcon, MessageSendIcon } from '../../../icons/icon'

const MessageSend = () => {
    const [message, setMessage] = useState([]);
    console.log(message)
    const sendMessage = (e => {
        e.preventDefault();
        db.collection('messages').add({
            displayName: "kadirkara22",
            username: " Kadir Kara",
            verified: true,
            text: message,
            avatar: "https://pbs.twimg.com/profile_images/654717275413413892/suoRxAIA_400x400.jpg",
            id: Math.random() * 100


        });
        setMessage("");
    })



    return (
        <div className="flex flex-row items-center py-2 border-t-2 sticky bottom-0 w-full">
            <div className="flex items-center justify-center cursor-pointer text-primary-base w-10 h-10 hover:bg-primary-light rounded-full"><ImageIcon className="w-5 h-5" /></div>
            <div className="flex items-center justify-center cursor-pointer text-primary-base w-10 h-10 hover:bg-primary-light rounded-full"><GIFIcon className="w-5 h-5" /></div>


            <div className="flex items-center justify-between h-12 mr-5 ml-1 w-full space-x-4  pr-20 rounded-3xl text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <div>
                    <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Start a new message" className="w-full pl-4  placeholder-gray-dark bg-transparent focus:outline-none text-sm"></input>
                </div>
                <div className="flex items-center justify-center cursor-pointer h-10 w-10 rounded-full hover:bg-primary-light text-primary-base">
                    <ImojiIcon className="w-5 h-5" />

                </div>
            </div>
            <button type="submit" onClick={sendMessage} className="flex items-center justify-center cursor-pointer pr-2 h-10 w-10 rounded-full hover:bg-primary-light text-primary-base">
                <MessageSendIcon className="w-5 h-5" />

            </button>
        </div>
    )
}

export default MessageSend
