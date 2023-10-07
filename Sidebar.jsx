import React from 'react'
import {TbMathGreater} from "react-icons/tb"
import {BsPentagon,BsEnvelope,BsCalendarCheck,BsFileEarmarkBinary,BsLock,BsInputCursorText,BsSquare,BsBoxArrowUpRight,BsTable,BsBarChart,BsHeadphones,BsFileEarmarkText,BsCart3,BsChat} from 'react-icons/bs'
import { FiUsers,FiSettings } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { TbSquareLetterT,TbLayoutNavbar } from "react-icons/tb";
import { PiArrowSquareRightLight} from "react-icons/pi";
import { BiIdCard,BiMenu} from "react-icons/bi";
import { MdKeyboardCommandKey } from "react-icons/md";
import { VscCircleSmall } from "react-icons/vsc";


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
        <img src="./src/images/logo.png" className='img-logo'/>
        <h2>Vuexy</h2>
        <div className='sidebar-brand'></div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
        <li className='sidebar-list-item'><a href=''><BsPentagon className='icon'/>DashBoard </a><TbMathGreater className='icon'/></li>
        <li className='sidebar-list-item'><a href=''><VscCircleSmall className='icon'/>Analytics </a></li>
        <li className='sidebar-list-item'><a href=''><VscCircleSmall className='icon'/>eCommerce </a></li>
        <li className='sidebar-list-item'><a href=''><VscCircleSmall className='icon'/>CRM </a></li>
        <li><span class="title-text" icon="table-separator">APPS & PAGES</span></li>
        <li className='sidebar-list-item'><a href=''><BsEnvelope className='icon'/>Email </a></li>
        <li className='sidebar-list-item'><a href=''><BsChat className='icon'/>Chart</a></li>
        <li className='sidebar-list-item'><a href=''><BsCalendarCheck className='icon'/>Calendar </a></li>
        <li className='sidebar-list-item'><a href=''><BsFileEarmarkBinary className='icon'/>Invoice </a></li>
        <li className='sidebar-list-item'><a href=''><FiUsers className='icon'/>User </a></li>
        <li className='sidebar-list-item'><a href=''><FiSettings className='icon'/>Roles & permissions</a></li>
        <li className='sidebar-list-item'><a href=''><GrDocument className='icon'/>Pages </a></li>
        <li className='sidebar-list-item'><a href=''><BsLock className='icon'/>Authentication</a></li>
        <li className='sidebar-list-item'><a href=''><BsInputCursorText className='icon'/>Wizard Examples </a></li>
        <li className='sidebar-list-item'><a href=''><BsSquare className='icon'/>Dialog Examples </a></li>
        <li><span class="title-text" icon="table-separator">UI ELEMENTS</span></li>
        <li className='sidebar-list-item'><a href=''><TbSquareLetterT className='icon'/>Typography </a></li>
        <li className='sidebar-list-item'><a href=''><PiArrowSquareRightLight className='icon'/>Icons </a></li>
        <li className='sidebar-list-item'><a href=''><BiIdCard className='icon'/>Cards </a></li>
        <li className='sidebar-list-item'><a href=''><BsCart3 className='icon'/>Components </a></li>
        <li className='sidebar-list-item'><a href=''><BsCart3 className='icon'/>Extensions </a></li>
        <li><span class="title-text" icon="table-separator">FORMS & TABLES</span></li>
        <li className='sidebar-list-item'><a href=''><BsCart3 className='icon'/>Form Elements</a></li>
        <li className='sidebar-list-item'><a href=''><TbLayoutNavbar className='icon'/>Form Layouts </a></li>
        <li className='sidebar-list-item'><a href=''><BsBoxArrowUpRight className='icon'/>Form Validation </a></li>
        <li className='sidebar-list-item'><a href=''><BsTable className='icon'/>Tables </a></li>
        <li><span class="title-text" icon="table-separator">CHARTS</span></li>
        <li className='sidebar-list-item'><a href=''><BsBarChart className='icon'/>Charts </a></li>
        <li><span class="title-text" icon="table-separator">OTHERS</span></li>
        <li className='sidebar-list-item'><a href=''><MdKeyboardCommandKey className='icon'/>Access Control </a></li>
        <li className='sidebar-list-item'><a href=''><BiMenu className='icon'/>Nav Levels </a></li>
        <li><span class="title-text" icon="table-separator">Disabled Menu</span></li>
        <li className='sidebar-list-item'><a href=''><BsHeadphones className='icon'/>Raise Support </a></li>
        <li className='sidebar-list-item'><a href=''><BsFileEarmarkText className='icon'/>Documentation </a></li>
        </ul>
    </aside>
  )
}

export default Sidebar
