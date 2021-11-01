import React from 'react'
import { AnalyticsIcon, InfoIcon, LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon, VerifiedIcon } from '../../../icons/icon'

const ProfileTweet = ({ displayName, username, verified, text, image, avatar, reply, retweet, like, share }) => {
    const timestamp = new Date()
    return (
        <div className="flex flex-row cursor-pointer border-b hover:bg-gray-100">
            <div className="ml-4 pt-4 w-16">
                <img src={avatar}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                ></img>
            </div>
            <div className="break-all">
                <div className="ml-4 pt-4 mr-6">
                    <div className="flex items-center justify-between w-96">
                        <div className="flex flex-row items-center">
                            <h3 className="font-bold hover:underline mr-1">{username}</h3>

                            <span className="text-gray-dark flex flex-row">
                                {
                                    verified && <VerifiedIcon className="w-5 h-5 text-primary-dark" />
                                }
                                @{displayName}</span>
                            <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"></div>
                            <span className="text-gray-dark">
                                {timestamp.toLocaleDateString()}
                            </span>
                        </div>
                        <div className="w-8 h-8 -mr-20 flex items-center justify-center text-gray-600 hover:bg-primary-light hover:text-primary-base rounded-full">
                            <InfoIcon className="w-5 h-5 " />
                        </div>
                    </div>

                    <p className="mt-2 text-gray-900 text-xl">{text}</p>

                    <img src={image}
                        className="my-2 rounded-xl max-h-96 w-full"
                    ></img>
                    <ul className="flex justify-between max-w-md -ml-1 mt-3 mb-2">
                        <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                                <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                            </div>
                            <span className="group-hover:text-primary-base">{reply}</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-50">
                                <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
                            </div>
                            <span className="group-hover:text-green-400">{retweet}</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-100">
                                <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
                            </div>
                            <span className="group-hover:text-pink-400">{like}</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                                <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
                            </div>
                            <span className="group-hover:text-primary-base">{share}</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                                <AnalyticsIcon className="w-5 h-5 group-hover:text-primary-base" />
                            </div>
                            <span className="group-hover:text-primary-base">{share}</span>
                        </li>
                    </ul>

                </div>

            </div>




        </div>
    )
}

export default ProfileTweet
