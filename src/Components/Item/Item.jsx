import React from 'react';
import { Link } from "react-router-dom";
export default function Item(props) {
  console.log(props);
  let{title,poster_path,overview,vote_average,id,media_type}=props.data
  return (
    <>
      <div className='col-md-2'>
    <div>
    <div className='item position-relative overflow-hidden'>
        <img className='w-100' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
         <Link to={`/details/${id}/${media_type}`}>
         <div className='overlay d-flex align-items-center text-center'>
           <p>{overview.split(' ').slice(0,10).join(' ')}</p>
        </div>
         </Link>
        <div className='vote p-2'>{vote_average.toFixed(1)}</div>
        </div> 
      <div>
      <h6 className='my-3'>{title}</h6>
      </div>
    </div>  
      </div>
    </>
  )
}
