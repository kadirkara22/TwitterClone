import React from 'react'
import MessageContent from './MessageContent'
import MessageHeader from './MessageHeader'
import MessageSend from './MessageSend'

const MessagesInput = ({ selectedFriend }) => {

    return (
        <div className="w-full ml-10 sticky top-0 mt-0 pt-0 h-screen">
            <MessageHeader />
            <MessageContent selectedFriend={selectedFriend} />
            <MessageSend />
        </div>
    )
}

export default MessagesInput
