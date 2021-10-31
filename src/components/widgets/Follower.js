import React from 'react'

const Follower = ({ username, nickname, image }) => {
    return (
        <div className="flex flex-row justify-between items-center mb-6 hover:bg-gray-200 cursor-pointer pt-3 py-2 px-4 transform transition-colors duration-300">
            <div className="flex ">
                <img src={image}
                    alt="Profile"
                    className="w-14 h-14 rounded-full"
                ></img>
                <div className="flex flex-col px-3 pl-4">
                    <span className="font-bold text-l text-black hover:underline">{username.slice(0, 16)}...</span>
                    <span className="text-m text-gray-dark">{nickname}</span>

                </div>
            </div>
            <button className="w-20 h-9 bg-black hover:bg-gray-800 font-semibold text-white rounded-full transform transition-colors duration-300">Follow</button>
        </div>
    )
}

export default Follower
