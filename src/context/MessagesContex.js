import React, { useEffect, useState } from "react";
import db from "../firebase";

export const MessagesContext = React.createContext();

const MessagesContextProvider = (props) => {
    const [messages, setMessages] = useState([]);
    const [selectedFriend, setSelectedFriend] = useState(null);
    useEffect(() => {
        db.collection('messages').onSnapshot(
            snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            )
        )
    }, [])
    const handleMessageClick = (username) => {
        const selectMessage = messages.find((e) => e.username === username)
        setSelectedFriend(selectMessage);

    }



    return (
        <MessagesContext.Provider value={{ handleMessageClick, selectedFriend, messages }}>
            {props.children}
        </MessagesContext.Provider>
    )
}
export default MessagesContextProvider;