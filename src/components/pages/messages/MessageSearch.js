import React from 'react'
import { SearchIcon } from '../../../icons/icon'

const MessageSearch = ({ handleChange }) => {

    return (
        <div className="border-b-2 h-16 py-2">
            <div className="flex items-center h-12 mx-6 space-x-4 w-80 text- rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-6 h-6 ml-3" />
                <input type="text" onChange={(event) => { handleChange(event.target.value) }} placeholder="Search for people and groups" className="w-full placeholder-gray-dark bg-transparent focus:outline-none text-lg"></input>
            </div>
        </div>
    )
}

export default MessageSearch
