import React from 'react'
import { SettingsIcon } from '../../icons/icon'
import Trending from './Trending'

export const trendy = [
    {
        trending: "Movies & TV . Trending",
        subject: "#Edho",
        tweetCounter: "8,465 tweets",
    },
    {
        trending: "Trending in Turkey",
        subject: "Web 3.0",
        tweetCounter: "6,924  tweets",
    },
    {
        trending: "Trending in Istanbul",
        subject: "Atalay Bayındır",
        tweetCounter: "5,169 tweets",
    },
    {
        trending: "Trending in Turkey",
        subject: "Galatasaray&G.Antep",
        tweetCounter: "3.465 tweets",
    },
    {
        trending: "Politics . Trending",
        subject: "Biden",
        tweetCounter: "3.460 tweets",
    },
    {
        trending: "Trending in Turkey",
        subject: "#izmirlikızlarefsanedir",
        tweetCounter: "3.265 tweets",
    },
    {
        trending: "Movies & TV . Trending",
        subject: "Oktay Kaynarca",
        tweetCounter: "2.165",
    },
    {
        trending: "Sports . Trending",
        subject: "Pique",
        tweetCounter: "1.465 tweets",
    }

]


const Trends = () => {
    return (
        <div className="bg-gray-lighttest ml-2 m-5 rounded-2xl">
            <div className="flex flex-row items-center justify-between p-3">
                <h1 className="text-2xl font-bold pl-2">Trends for you</h1>
                <div className="flex items-center justify-center w-10 h-10 mr-2 cursor-pointer hover:bg-gray-200 rounded-full">
                    <SettingsIcon className="w-6 h-6 " />
                </div>
            </div>
            {
                trendy.map(({ tweetCounter, subject, trending }) => (
                    <Trending trending={trending} subject={subject} tweetCounter={tweetCounter} />
                )).slice(0, 5)
            }

            <div className="pl-5 h-14 hover:bg-gray-200 rounded-b-2xl py-4">
                <h1 className="text-primary-dark cursor-pointer text-m ">Show more</h1>
            </div>
        </div>
    )
}

export default Trends;
