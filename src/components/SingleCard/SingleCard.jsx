import React from 'react'
import { Link } from 'react-router-dom';

const SingleCard = ({card}) => {
    const { technology,heading,author,date,blogImage, content,authorImage} = card;
  return (
    <div >
        <Link to={'/Details'}>
        <div className=' flex flex-col gap-2 border border-[#e7e7e7] w-[250px] h-[320px] p-2 rounded-md '>
            <div className=' w-full h-[150px]'>
                <img src={blogImage} alt="" className=' w-full h-full object-cover object-center rounded-md ' />
            </div>
            <div className='w-full h-[170px]'>
                <span className='text-[#6267ee] bg-[#f6f8ff] text-[12px] inline-block px-2 rounded-md font-semibold '>{technology}</span>
                <h1 className=' my-2 font-bold text-[18px] w-full h-[80px] leading-6 '>{heading}</h1>
                <div className=' flex justify-between w-full pl-2 pr-6 items-center '>
                    <div className='  flex gap-2  items-center '>
                        <div className='w-5 h-5'>
                            <img src={authorImage} alt=""  className=' w-full h-full rounded-full '/> 
                        </div>
                        <div>
                            <span className=' text-[12px] text-slate-400 font-medium'>{author}</span>
                        </div>
                    </div>
                    <div className=' text-[12px] text-slate-400 font-medium'>{date}</div>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default SingleCard