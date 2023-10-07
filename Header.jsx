
import {BsSearch,BsJustify,BsSun} from 'react-icons/bs'
import { HiLanguage } from "react-icons/hi2";
import { TbTablePlus } from "react-icons/tb";
import {VscBellDot} from "react-icons/vsc";
import React,{useState} from 'react';


function Header({OpenSidebar}) {

  return (
    <header className='header' >
    <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
    </div>
    <div className='header-left'>
    <BsSearch className='icon'/><h3>Search</h3>
    
    </div>
    <div className='header-right'>
    <HiLanguage className='icon'/>
    <BsSun  className='icon'/>
    <TbTablePlus  className='icon'/>
    <VscBellDot className='icon'/>
    <img src="./src/images/profile.jpg" className='img-profile'/>
    </div>


    </header>
  )
}

export default Header