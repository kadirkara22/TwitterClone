import React, { useContext, useEffect, useState } from 'react'
import { PopularIcon } from '../../../icons/icon'
import UserTweet from './UserTweet';
import { EmojiIcon, GIFIcon, ImageIcon, PlanIcon, PollIcon } from '../../../icons/icon'
import Tweet from './Tweet';
import db from '../../../firebase';
import { UserContext } from '../../../context/UserContext';
import { TweetContext } from '../../../context/TweetContext';




export const reacticon = [
    {
        name: "ImageIcon",
        icon: ImageIcon
    },
    {
        name: "GIFIcon",
        icon: GIFIcon
    },
    {
        name: "PollIcon",
        icon: PollIcon
    },
    {
        name: "EmojiIcon",
        icon: EmojiIcon
    },
    {
        name: "PlanIcon",
        icon: PlanIcon
    },
]
const Feed = () => {

    const { users } = useContext(UserContext);
    const { sendTweet, posts, tweetMessage, setTweetMessage } = useContext(TweetContext)

    return (

        < div className="max-w-xl min-h-scree  border" >

            <div className="flex flex-row items-center justify-between bg-white cursor-pointer sticky top-0 border-b-2 h-14 pl-4 pr-2">
                <div>
                    <span className="font-bold text-xl">Home</span>
                </div>
                <div className="hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full">
                    <PopularIcon className="w-6 h-6" />
                </div>
            </div>

            <div className="flex flex-row items-center border-b-2 h-36">
                <div className="h-full pl-4 pt-3">
                    <img src="https://pbs.twimg.com/profile_images/654717275413413892/suoRxAIA_400x400.jpg"
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                    ></img></div>

                <div className="flex flex-col flex-1 mt-2 px-2 ml-2">
                    <textarea value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)}
                        className="w-full text-2xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's happening?"
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex -ml-3">
                            {
                                reacticon.map(({ name, icon }) => (
                                    <UserTweet name={name} Icon={icon} />
                                ))
                            }

                        </div>
                        <button onClick={sendTweet} type="submit" className="bg-primary-base text-white rounded-full px-4 py-2 outline-none font-medium"

                        >Tweet</button>
                    </div>

                </div>


            </div>
            {
                posts.map((post) => (
                    <Tweet
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                        reply={post.reply}
                        retweet={post.retweet}
                        like={post.like}
                        share={post.share}
                    />
                ))
            }

        </div >

    )
}

export default Feed;
