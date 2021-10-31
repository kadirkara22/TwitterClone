import React from 'react'
import { SearchIcon } from '../../icons/icon'

const Search = () => {
    return (
        <div className="bg-white sticky top-0">
            <div className="flex items-center sticky top-0 h-12 space-x-4 p-2 mt-1 ml-2 mr-6 mb-2 bg-gray-100 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-6 h-6 ml-3" />
                <input type="text" placeholder="Search Twitter" className="w-full placeholder-gray-dark bg-transparent focus:outline-none text-lg"></input>
            </div>
        </div>
    )
}

export default Search
