import React, { useEffect, useState } from "react";
import db from "../firebase";


export const TweetContext = React.createContext();

const TweetContextProvider = (props) => {
    const [posts, setPost] = useState([]);
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [tweetReply, TweetReply] = useState("");
    const [tweetRetweet, setTweetRetweet] = useState("");
    const [tweetLike, setTweetLike] = useState("");
    const [tweetShare, setTweetShare] = useState("");

    const sendTweet = (e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "kadirkara22",
            username: " Kadir Kara",
            verified: true,
            text: tweetMessage,
            avatar: "https://pbs.twimg.com/profile_images/654717275413413892/suoRxAIA_400x400.jpg",
            image: tweetImage,
            reply: tweetReply,
            retweet: tweetRetweet,
            like: tweetLike,
            share: tweetShare,

        });
        setTweetMessage("");
    })

    useEffect(() => {
        db.collection('posts').onSnapshot(
            snapshot => (
                setPost(snapshot.docs.map(doc => doc.data()))
            )
        )
    }, [])



    return (
        <TweetContext.Provider value={{ sendTweet, posts, tweetMessage, setTweetMessage }}>
            {props.children}
        </TweetContext.Provider>
    )
}
export default TweetContextProvider;