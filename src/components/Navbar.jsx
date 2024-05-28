import React from 'react';
import '../components/css/Navbar.css'
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/sowmya.png";
import {Link} from 'react-router-dom';

function Navbar({setSidebar}){
    
    return(<nav className="flex w-full py-2.5 px-2 shadow-stone-950 justify-between bg-white z-10 sticky top-0  ">
        <div className='flex items-center '>
            <img className='cursor-pointer w-5.5 mr-7.5' onClick={()=>setSidebar(prev=> prev=== false ?true:false)} src={menu_icon} alt=''/>
            <Link to='/'><img className='cursor-pointer w-110px' src={logo} alt=''/></Link>
        </div>
        <div className='flex items-center border-1  border-black  mr-15px  px-3 py-2 rounded-3xl' >
            <div className='flex items-center border-1  border-black  mr-15px px-3 py-2 rounded-3xl'>
            <input  className='w-96  border-0 outline-0 bg-transparent 'type='text' placeholder ='Search' />
            <img className ='cursor-pointer  w-15px ' src={search_icon} alt=''/>
            
            </div>
           
            
        </div>
        <div className='flex items-center '>
            <img  className ='cursor-pointer w-6 mr-6 ' 
            src={upload_icon} alt="" />
            <img className ='cursor-pointer w-6 mr-6' src={more_icon} alt="" />
            <img className ='cursor-pointer w-6 mr-6 ' src={notification_icon} alt="" />
            <img   className=' cursor-pointer w-9 h-9 rounded-full'src={profile_icon} alt="" />
             
        </div>

    </nav>)
}

export default Navbar;