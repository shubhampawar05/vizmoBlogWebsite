import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { Link } from 'react-router-dom'
import Logo from './../../assets/vizmo.svg'

const Header = () => {
  return (

    <div className='bg-slate-100 ' >
        <ContentWrapper>
            <div className=' flex justify-between px-4 py-4 border-b bg-white shadow-b  '>
               <Link to={'/'}>
               <div className=' p-2'> 
                   <img src={Logo} alt="" />
                </div>
               </Link>
                <Link to={'/AddPost'}>
                <div className=' p-2 bg-[#46BCAF] text-white font-semibold rounded-md'>
                    <button className='  text-white font-semibold '>
                        Create Blog
                    </button>
                </div>
                </Link>
            </div>
        </ContentWrapper>
    </div>
  )
}

export default Header