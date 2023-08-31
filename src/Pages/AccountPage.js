import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Announcment } from '../components/Navbar/Announcment'
import { UserprofileComp } from '../components/Profile/UserprofileComp'
import { Footer } from '../components/Footer/Footer'

export const AccountPage = () => {
  return (
    <div>
            <div className='container-fluid' style={{textAlign:"center"}}>
        <Announcment/>
<Navbar/>
<UserprofileComp/>
<Footer/>
    </div>
    </div>
  )
}
