import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading.jsx';
import { getTrending } from "./../../Api/Api.js";
import Item from "./../Item/Item.jsx";
export default function Tv() {
  const [Tv,setTv] = useState([])
  async function getData(){

 let tv = await getTrending('tv')
 setTv(tv) 
} 
useEffect(()=>{
 getData()
},[])
  return (
    <>
      {Tv.length>0? <>  <div className="container">
  <div className="row">


   {Tv.map((value,index)=><Item key={index} data={value}/>)}
  </div>
  </div></>:<Loading/>}
    </>
  )
}
