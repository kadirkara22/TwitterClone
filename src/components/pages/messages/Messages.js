import React, { useContext, useEffect, useState } from 'react'
import MessagesContextProvider, { MessagesContext } from '../../../context/MessagesContex';
import db from '../../../firebase';
import { MessageInfoIcon, SearchIcon, SettingsIcon } from '../../../icons/icon';
import MessageSearch from './MessageSearch';
import MessagesFriend from './MessagesFriend'
import MessagesList from './MessagesList';

const Messages = () => {
    const [searchMessage, setSearchMessage] = useState("")
    const { handleMessageClick, selectedFriend, messages } = useContext(MessagesContext);




    return (

        <div className="flex flex-row ml-18">
            <div className="border-l-2 border-r-2 h-screen w-96 flex flex-row">
                <div>
                    <div className="flex flex-row items-center justify-between sticky top-0 bg-white py-4 px-4 border-b-2">
                        <div className="font-bold text-xl">Messages</div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"><SettingsIcon className="w-6 h-6 " /></div>
                            <div className="hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"><MessageInfoIcon className="w-6 h-6" /></div>
                        </div>
                    </div>

                    <MessageSearch searchMessage={searchMessage} handleChange={setSearchMessage} />
                    {/*     {messages.map((message) => (
                        <MessagesFriend
                            key={message.text}
                            avatar={message.avatar}
                            username={message.username}
                            displayName={message.displayName}
                            text={message.text}
                            verified={message.verified}
                            date={message.date}
                            handleMessageClick={handleMessageClick}
                            selectedFriend={selectedFriend}
                            searchMessage={searchMessage}
                        />
                    ))
                    } */}
                    <MessagesFriend messages={messages} searchMessage={searchMessage} />
                </div>

            </div>
            <MessagesList
            />
        </div>

    )
}

export default Messages
