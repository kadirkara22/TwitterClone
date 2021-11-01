import React, { useEffect, useState } from "react";
import db from "../firebase";


export const UserContext = React.createContext();

const UserContextProvider = (props) => {
    const [users, setUser] = useState();


    useEffect(() => {
        db.collection('users').onSnapshot(
            snapshot => (
                setUser(snapshot.docs.map(doc => doc.data()))
            )
        )
    }, [])

    return (
        <UserContext.Provider value={{ users }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;