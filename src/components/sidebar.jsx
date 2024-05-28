import React from "react";
import home from '../assets/home.png';
import '../components/css/sidebar.css';
import game_icon from '../assets/game_icon.png';
import automobiles from '../assets/automobiles.png';
import sports from '../assets/sports.png';
import entertainment from'../assets/entertainment.png';
import tech from '../assets/tech.png';
import music from '../assets/music.png';
import blogs from '../assets/blogs.png';
import news from '../assets/news.png';
import jack from '../assets/jack.png';
import simon from '../assets/simon.png';
import tom from '../assets/tom.png';
import megan from '../assets/megan.png';
import cameron from '../assets/cameron.png';

function Sidebar({sidebar,category,setCategory}){
    
  
    return (
        
    <div className={`sideBar ${sidebar? "" : "smallsidebar"}`}>
        <div className="shortcut-links">
        <div className={`sidelink ${category=== 0?"active":""}`} onClick={()=>setCategory(0)}>
                <img className="w-5 mr-5 " src={home} alt=''/><p  >Home</p>
            </div> 
            <div className={`sidelink ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
            <img  className="w-5 mr-5 " src={game_icon} alt=''/><p >Gaming</p>

            </div>
            <div className={`sidelink ${category===2?"active":""}`} onClick={()=> setCategory(2)}>
                <img className="w-5 mr-5 "src={automobiles} alt=''/><p >Automobiles</p>

            </div>
            <div className={`sidelink ${category===17?"active":""}`} onClick={()=> setCategory(17)}>
                <img className="w-5 mr-5 " src={sports} alt=''/><p >Sports</p>

            </div>
            <div className={`sidelink ${category===24?"active":""}`} onClick={()=> setCategory(24)}>
                <img className="w-5 mr-5 " src={entertainment} alt=''/><p >Entertainment</p>

            </div>
            <div className={`sidelink ${category===28?"active":""}`} onClick={()=> setCategory(28)}>
                <img className="w-5 mr-5 "src={tech} alt=''/><p >Technology</p>

            </div>
            <div className={`sidelink ${category===10?"active":""}`} onClick={()=> setCategory(10)}>
                <img className="w-5 mr-5 " src={music} alt=''/><p >Music</p>

            </div>
            <div className={`sidelink ${category===22?"active":""}`} onClick={()=> setCategory(22)}>
                <img className="w-5 mr-5 " src={blogs} alt=''/><p >Blogs</p>

            </div>
            <div className={`sidelink ${category===25?"active":""}`} onClick={()=> setCategory(25)}>
                <img className="w-5 mr-5 " src={news} alt=''/><p >News</p>

            </div>
            <hr className="b-0  h-1px bg-grey w-1"/>
            </div>

            <div className="">
                <h3 className="font-3 mx-0 my-4 font-black">Subscribed</h3>
                
                <div className='sidelink'>
                    <img className='w-6 rounded-full mr-4'src={jack} alt=''/> <p >pewDiePie</p>
                </div>
                <div className='sidelink'>
                    <img className='w-6 rounded-full mr-4' src={simon} alt=''/> <p >MrBeast</p>
                </div>
                <div className='sidelink'>
                    <img className='w-6 rounded-full mr-4' src={tom} alt=''/> <p >Justin Bieber</p>
                </div>
                <div className='sidelink'>
                    <img className='w-6 rounded-full mr-4' src={megan} alt=''/> <p >5-Minute Crafts</p>
                </div>
                <div className='sidelink'>
                    <img className='w-6 rounded-full mr-4' src={cameron} alt=''/> <p >Nas Daily</p>
                </div>

            </div>

        </div>
        
       
   )
}

export default Sidebar;
