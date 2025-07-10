import React from 'react'
import {assets} from '../assets/assets'
import { useClerk,useUser,UserButton,SignIn} from '@clerk/clerk-react'
import {Link,useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
export function Navbar() {
      const{company,setCompany}=useContext(AppContext)
      const { openSignIn,openUserProfile } = useClerk()
      const {user}=useUser()
      const navigate=useNavigate()

  return (
   
    <div className='flex justify-between  px-4 sm:px-8 md:px-14 py-6 border-b items-center border-gray-300'>
        <div className='w-20 sm:w-28 md:w-36'>
            <img src={assets.logo} className='w-full h-auto   object-contain'/>
        </div>


        {company?
        <div className='flex gap-4 items-center'>
            <Link to ="/applications" className='underline hover:text-blue-700 text-xs sm:text-sm md:text-base'>{company.companyName}</Link>
        </div>:
        <div>Hello
            </div>
}
    </div>
  )
}

