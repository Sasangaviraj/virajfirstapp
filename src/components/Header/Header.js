

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { IconButton } from '@mui/material';
import { useState } from 'react';

const Header = () => {
  console.log('Header Re-renderring');
  const [isSearch,setIsSearch] = useState(false)
  return (
    <header className="fixed top-0 left-0 z-[100]  w-full py-3 px-2  bg-my-background flex items-center justify-between drop-shadow-header-shadow">
        {/* header left */}

        <div className='flex items-center '>

        <IconButton sx={{color:'white'}} >
        <MenuIcon sx={{
              color:'white',
            }} />
        </IconButton>


            <h1 style={{
                  display:
                  window.innerWidth<640? 
                  isSearch? 
                  ' none'
                  :'inline-block'
                  : 'inline-Block',
                }} 
                className='ml-2 text-sm font-bold'>VIRAJ<span className='text-red-600 ml-2'>DEV</span></h1>

            <div style={{
                  backgroundColor:
                  window.innerWidth<640? 
                  isSearch? 
                  ' #f8d6d6]'
                  :'inherit'
                  : '#f8d6d6]',
                    
                }} 
                className='overflow-hidden ml-2 flex items-center rounded-full bg-[#f8d6d6]'>
                <input type="text" 
                placeholder="Search" 
                style={{
                  display:
                  window.innerWidth<640? 
                  isSearch? 
                  ' inline-block'
                  :'none'
                  : 'bg-inline-Block',
                  transition:'all 400ms ease-in-out'
                }}
                className='  hidden sm:inline-block  ml-1  outline-none p-2 font-semibold text-sm w-[200px] bg-inherit'/>

                <IconButton onClick={()=>{
                  if(window.innerWidth<640){
                    setIsSearch(!isSearch)
                  }
                }}>
                <SearchIcon sx={{
                  color: window.innerWidth<640? 
                  isSearch? 
                  ' rgb(156 163 175)'
                  :'black'
                  : 'rgb(156 163 175)',
                }} className='text-gray-400 mr-2'  />
                </IconButton>
                
            </div>
        </div>

        {/* header right */}

        <IconButton>
          <div className='relative p-1'>
          <ShoppingCartOutlinedIcon className='text-black'/>
          <div className='absolute top-[2px] right-0 text-[7px] font-semibold text-white  bg-black flex items-center justify- center w-3 h-3 rounded-full '>
            2
            </div>
          </div>
       
        </IconButton>

        
      
    </header>
  );
}

export default Header
