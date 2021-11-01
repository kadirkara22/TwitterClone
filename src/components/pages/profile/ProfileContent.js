import React, { useContext } from 'react'
import { TweetContext } from '../../../context/TweetContext'
import ProfileTweet from './ProfileTweet';

const ProfileContent = () => {
    const { sendTweet, posts, tweetMessage, setTweetMessage } = useContext(TweetContext);


    return (
        <div>
            {
                posts.map((post) => (
                    <ProfileTweet
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
        </div>
    )
}

export default ProfileContent
