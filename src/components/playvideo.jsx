import React, { useEffect, useState } from "react";
import '../components/css/playvideo.css';
import video1 from '../assets/video.mp4';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import share from '../assets/share.png';
import jack from '../assets/jack.png';
import save from '../assets/save.png';
import user_profile from '../assets/user_profile.jpg'
import { API_KEY, value_converter } from "../data";
import moment from "moment";
import { useParams } from "react-router-dom";

function Playvideo(){
    const {videoId} = useParams();
    const[apiData,setApiData] = useState(null);
    const[channelData, setChannelData] =useState(null);
    const[commentData,setCommentData] =useState([]);

    const fetchVideoData = async()=> {
        //fetching Videos data 
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `
        await fetch(videoDetails_url).then(res=> res.json()).then(data=>setApiData(data.items[0]))
    }

    const fetchOtherData =async()=>{
        //fetching channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
        
        //fetching comment Data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

   
    useEffect(()=>{
        fetchVideoData();
    },[videoId])

    useEffect(()=>{
        fetchOtherData();
    },[apiData]);

    return(
    
    <div className="play-video">
        {/*<video  src={video1} controls autoplay muted/>*/}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
        <h3 >{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className=" play-video-info">
            <p> {apiData?value_converter( apiData.statistics.viewCount):"16K"} views &bull;  {apiData?moment(apiData.snippet.publishedAt).fromNow():"1 day ago "}  </p>
            <div>
                <span><img src={like} alt="" /> {apiData?value_converter(apiData.statistics.likeCount): "155"} </span>
                <span><img src={dislike} alt="" />  </span>
                <span><img src={share} alt="" /> share </span>
                <span><img src={save} alt="" /> save </span>

            </div>
        </div>
        <hr className="border-0 h-0.5  bg-zinc-300  mx-0 my-2.5 "/>
        <div className="flex items-center mt-5 ">
            <img className="rounded-full w-10  mr-3.5  " src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div className="flex-1 leading-4">
                <p className="text-black text-4.5 font-semibold mb-1 ">{apiData?apiData.snippet.channelTitle:""}</p>
                <span className="text-gray-500 mt-1">{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
            </div>
            <button className="bg-red-600 text-white rounded px-7 py-1 border-0 outline-0 cursor-pointer ">Subscribe</button>
        </div>
        <div className=" pl-12 mx-0 my-3.5 ">
        <p className="text-3 mb-1.5 text-gray-600">{apiData? apiData.snippet.description.slice(0,250): "description"}</p>
        
        <hr/>
        <h4 className="text-3 text-stone-950  mt-4 font-semibold">{apiData?value_converter(apiData.statistics.commentCount):"130"}comments</h4>
        {commentData.map((item,index)=>{
           return (
            <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
        <div>
        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
        <div className="comment-action ">
            <img src={like} alt="" /><span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
            <img src={dislike} alt="" />
        </div>
        </div>
        </div>

           ) 
        })}
       
        
        </div>
    </div>)
}

export default Playvideo;
