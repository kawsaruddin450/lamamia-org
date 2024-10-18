import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'

const DarkModeToggle = () => {
  const {toggle, mode} = useContext(ThemeContext);
  return (
    <div onClick={toggle} className='w-12 h-6 border-2 border-green-400 rounded-3xl flex justify-between items-center relative cursor-pointer'>
        <div className='text-xs'>🌙</div>
        <div className='text-xs'>🔆</div>
        <div className={`w-4 h-4 bg-green-300 rounded-full absolute ${mode === "light" ? "left-0" : "right-0"}`}></div>
    </div>
  )
}

export default DarkModeToggle;
