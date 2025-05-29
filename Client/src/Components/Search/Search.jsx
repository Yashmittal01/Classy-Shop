import React from 'react'
import './Search.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='search-box w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative'>
      <input type="text" placeholder='Search for products...' className='rounded-[5px] w-100 h-[50px] focus:outline-none bg-inherit p-2 text-[15px]' />
      <Button className='h-[50px] right-[-20px] min-w-[35px] !text-black'><IoSearch className='text-black text-[20px]' /></Button>
    </div>
  )
}

export default Search
