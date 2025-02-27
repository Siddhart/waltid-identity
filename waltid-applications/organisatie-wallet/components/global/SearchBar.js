import React from 'react'

//assets
import SearchSvg from '@/assets/icons/SearchSvg'

const SearchBar = ({title}) => {
    return (
        <div className='mt-12 flex flex-row justify-between items-center'>
            <div>
                <p className='text-3xl font-bold'>{title}</p>
            </div>

            <div className='flex items-center justify-end gap-4'>
                <input className='border-b-[1px] border-black px-3 focus:outline-none' placeholder='Zoeken...' />
                <button className='w-10 h-10 rounded-md bg-[#383EDE] flex items-center justify-center'>
                    <SearchSvg />
                </button>
            </div>
        </div>
    )
}

export default SearchBar