import React from 'react'
import { UserUpdate } from './UserUpdate'
import { EditUser } from './EditUser'

export const UserprofileComp = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
           
            <div className='col-10 '>
          

 <div>
        <div className="container-fluid">
        <div className='container m-4 p-4'>
    <div className='row'>
      <div className='col'>
        <h1>Edit User</h1>
      </div>
    </div>
    </div>
            <div className="row">
                <div className='col-lg-3 col-sm-12  p-2'>
<UserUpdate/>
                </div>
                <div className='col-lg-9 col-sm-12 p-2'>
<EditUser/>

                </div>

    </div>
    </div>
    </div>

            </div>
        </div>
    </div>
   </>
  )
}
