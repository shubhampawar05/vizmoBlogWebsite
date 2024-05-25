import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { Link } from 'react-router-dom'
import Logo from './../../assets/vizmo.svg'

const Header = () => {
  return (

    <div className=' shadow-xl' >
        <ContentWrapper>
            <div className=' flex justify-between px-4 py-4    '>
               <Link to={'/'}>
               <div className=' p-2 flex items-center'> 
                   <img src={Logo} alt="" /><span className=' inline-block text-2xl font-bold ml-[2px]'>Blog</span>
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