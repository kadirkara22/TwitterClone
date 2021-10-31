import React from 'react'
import { InfoIcon } from '../../icons/icon'

const Trending = ({ trending, subject, tweetCounter }) => {
    return (

        <div className="flex flex-row items-center justify-between hover:bg-gray-200 cursor-pointer">
            <div className="pl-5 pt-3 pb-3">
                <p className="text-sm">{trending}</p>
                <p className="font-bold">{subject}</p>
                <p className="text-sm">{tweetCounter}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 mb-11 mr-4 text-gray-400 hover:bg-primary-light hover:text-primary-base rounded-full">
                <InfoIcon className="w-6 h-6 " />
            </div>

        </div>
    )
}

export default Trending
