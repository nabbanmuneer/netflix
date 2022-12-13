import axios from '../../axios';
import { imageUrl,API_KEY } from "../../constants/constants";
import Youtube from 'react-youtube'
// import {Orginals,action } from './url.js'
import React,{ useEffect,useState } from 'react'
import './Rowpost.css'
import YouTube from 'react-youtube';
function Rowpost(props) {
  const [urlid,seturlid]=useState('')
  const [movie,setMovie]=useState([])
  useEffect(() => {
    axios.get(props.url).then((res)=>{
      console.log(res.data);
      setMovie(res.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  }, []);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
        if(res.data.results!==0){
          seturlid(res.data.results[0])
        }else{
          console.log("array not avalable")
        }
      })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        
        {movie.map((obj)=>
         <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster ' : 'poster'} src={`${imageUrl+obj.backdrop_path}`}  alt="poster" />
        )}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default Rowpost
