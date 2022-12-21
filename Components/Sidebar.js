import{
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon
} from '@heroicons/react/outline'

import React from 'react'

function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r 
    border-gray-900 '>
    

    <div className='space-y-5'>
      <button className='flex items-center space-x-2
      hover:text-white'>
        <HomeIcon className='h-5 w-5'/>
        <p>Home :3</p>
      </button>

      <button className='flex items-center space-x-2 
      hover:text-white'>
        <SearchIcon className='h-5 w-5'/>
        <p>Search :P</p>
      </button>

      <button className='flex items-center space-x-2
      hover:text-white'>
        <LibraryIcon className='h-5 w-5'/>
        <p>Your library </p>
      </button>

      
      <hr className='border-t-[0.2px] border-gray-900' />


      {/* this part is for 2nd list of components */}


      <button className='flex items-center space-x-2
      hover:text-white'>
        <PlusCircleIcon className='h-5 w-5'/>
        <p>Create Playlist </p>
      </button>

      <button className='flex items-center space-x-2 
      hover:text-white'>
        <HeartIcon className='h-5 w-5'/>
        <p>Liked songs </p>
      </button>

      <button className='flex items-center space-x-2
      hover:text-white'>
        <RssIcon className='h-5 w-5'/>
        <p>Your Episodes :O</p>

        
      </button>
      <hr className='border-t-[0.2px] border-gray-900' />
         
         {/*playlist when we're gonna connect spotify API*/}
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
         <p className='cursor-pointer hover:text-white'> playlist name.....</p>
          
    </div>
    </div>
  );
}

export default Sidebar
