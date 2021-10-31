import React, { useContext, useEffect, useState } from 'react'
import { MessagesContext } from '../../../context/MessagesContex';

import { VerifiedIcon } from '../../../icons/icon'

const MessagesFriend = ({ messages, searchMessage }) => {

    const { handleMessageClick } = useContext(MessagesContext);
    const timestamp = new Date()

    const filteredFriendList = messages.filter((u) =>
        `${u.username}${u.displayName}${u.text}`.toLowerCase().includes(searchMessage.toLowerCase())
    );

    return (
        <div>
            {
                filteredFriendList.map((item, i) => {
                    return (
                        <div key={i} onClick={() => handleMessageClick(item.username)} className="flex flex-row items-center w-full hover:bg-gray-100 h-20 cursor-pointer">

                            <div>
                                <img src={`${item.avatar}`} className="w-14 h-14 rounded-full ml-4"></img>
                            </div>
                            <div className="flex flex-col w-full ml-6 mr-4">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center">
                                        <span className="font-bold">{`${item.username}`} </span>
                                        <span> {
                                            item.verified && <VerifiedIcon className="w-5 h-5 text-primary-dark" />
                                        }</span>
                                        <span className="text-gray-400">@{`${item.displayName}`}</span>
                                    </div>
                                    <span>{`${timestamp.toLocaleDateString().slice(0, 5)}`}</span>

                                </div>
                                <span className="text-gray-600">{`${item.text.slice(0, 30)}`}</span>
                            </div>
                        </div >


                    )



                })

            }
        </div>

    )
}

export default MessagesFriend
