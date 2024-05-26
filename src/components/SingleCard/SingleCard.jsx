import React from 'react'
import { Link } from 'react-router-dom';

const SingleCard = ({card}) => {
    console.log(card);
    // const { technology,heading,author,date,blogImage, content,authorImage} = card;
    const {  id,category,title,authorName,date,imgUrl, content} = card;
  return (
    <div >
        <Link to={`Details/${id}`}>
        <div className=' flex flex-col gap-2 border border-[#e7e7e7] w-[250px] h-[300px] p-2 rounded-md '>
            <div className=' w-full h-[150px]'>
                <img src={imgUrl} alt="" className=' w-full h-full object-cover object-center rounded-md ' />
            </div>
            <div className='w-full'>
                <span className='text-[#6267ee] bg-[#f6f8ff] text-[12px] inline-block px-2 rounded-md font-semibold '>{category}</span>
                <h1 className=' my-2 font-bold text-[18px] h-[65px] w-full leading-6 '>{title.slice(0,70)}</h1>
                <div className=' flex justify-between w-full pl-2 pr-6 items-center '> 
                    <span className=' text-[12px] text-slate-400 font-medium'>{authorName.slice(0,25)}</span>   
                    <div className=' text-[12px] text-slate-400 font-medium'>{date}</div>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default SingleCard