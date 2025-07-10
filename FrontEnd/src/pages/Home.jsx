import React from 'react'
import {Navbar} from '../components/Navbar'
import {Search}  from '../components/Hero'
import {Joblisting} from './Joblisting'
import {Footer} from '../components/Footer'
import {Browser} from '../components/Browser'
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Browser/>
      <Footer/>
      
    </div>
  )
}


