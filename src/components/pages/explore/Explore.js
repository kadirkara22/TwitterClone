import React from 'react'
import { SearchIcon, SettingsIcon } from '../../../icons/icon';
import Trending from '../../widgets/Trending';
import { trendy } from '../../widgets/Trends';


const Explore = () => {

    return (
        <>
            < div className="w- min-h-scree border sticky top-0 bg-white" >
                <div className=" flex flex-row items-center justify-center">
                    <div className="flex items-center h-12 w-full space-x-4 p-2 mt-1 ml-2 mr-6 mb-2 bg-gray-100 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                        <SearchIcon className="w-6 h-6 ml-3" />
                        <input type="text" placeholder="Search Twitter" className="placeholder-gray-dark bg-transparent focus:outline-none text-lg"></input>

                    </div>
                    <div className="flex items-center justify-center w-10 h-10 mr-2 cursor-pointer hover:bg-gray-200 rounded-full">
                        <SettingsIcon className="w-6 h-6 " />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://pbs.twimg.com/semantic_core_img/1255910073831788550/xm0-QtpW?format=jpg&name=small"></img>
            </div>
            <div className=" border-r-2 border-l-2">
                <div className="flex flex-row items-center justify-between p-3">
                    <h1 className="text-2xl font-bold pl-2">Trends for you</h1>

                </div>
                {
                    trendy.map(({ tweetCounter, subject, trending }) => (
                        <Trending trending={trending} subject={subject} tweetCounter={tweetCounter} />
                    )).slice(0, 10)
                }

                <div className="pl-5 h-14 hover:bg-gray-100 py-4 border-b-2">
                    <h1 className="text-primary-dark cursor-pointer text-m ">Show more</h1>
                </div>
            </div>
        </>
    )
}

export default Explore;
