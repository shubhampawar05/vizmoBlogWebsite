import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { Link } from 'react-router-dom'
import Logo from './../../assets/vizmo.svg'

const Header = () => {
  return (

    <div className=' shadow-xl' >
        <ContentWrapper>
            <div className=' flex justify-between sm:px-4 sm:py-4 p-2    '>
               <Link to={'/'}>
               <div className='sm:p-2 flex items-center sm:w-full w-24' > 
                   <img src={Logo} alt=""  /><span className=' inline-block sm:text-2xl text-xl font-bold ml-[2px]'>Blog</span>
                </div>
               </Link>
                <Link to={'/AddPost'}>
                <div className=' sm:p-2 p-1 bg-[#46BCAF] text-white font-semibold rounded-md'>
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