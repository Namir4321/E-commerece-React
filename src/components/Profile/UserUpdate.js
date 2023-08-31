import React from 'react'
import {PersonOutlineOutlined,EmailOutlined,CalendarTodayOutlined, SmartphoneOutlined, LocationSearchingOutlined} from '@mui/icons-material';
import { useSelector } from 'react-redux';
export const UserUpdate = () => {
    const user=useSelector((state)=>state.user.userinfo)
    console.log(user)
  return (
    <div className='main-conter container-fluid m-2 p-4'>
        {user?(<>
            <div className='container-fluid d-flex m-2 p-2'>
<div className='d-flex text-center' style={{height:"60px",width:"60px"}}>
<img src={user.image} className='rounded-circle' style={{height:"60px",width:"60px"}}
/>
</div>
<div className='p-3 user titleContainer'>
    <span>{user.username}</span><br/>
</div>
</div>
<div className='account p-3 m-2'>
    <div className='p-2'>
    <span>Account Details</span>
    </div>

<div className='p-2'>
<span>
    <PersonOutlineOutlined className='m-1'/>{user.username}
    </span>  
</div>
<div className='p-2'>
<span>
        <CalendarTodayOutlined className='m-1'/>{new Date(user.createdAt).toLocaleDateString()}
        </span>  
</div>
<div className='m-2 '>
<span>Contact Details</span>
</div>

    <div className='p-2'>
        <span><EmailOutlined className='m-1'/>{user.email}</span>
    </div>
    
    


</div>
        </>):(<>
        No Account
        </>)}

    </div>
  )
}
