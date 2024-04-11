import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div class='side'>
      <div class="sidebar-header">Sidebar</div>
      <ul class="sidebar-options">
        <div className='sideLink'>
          <Link to={'/'}>Home</Link>
        </div>
        <div className='sideLink'>
          <Link to={'/content'}>Content</Link>
        </div>
        <div className='sideLink'>
          <Link to={'/error'}>Error Page</Link>
        </div>
        <div className='sideLink'>
          <Link to={'/not_found'}>Redirect If Link Not Found</Link>
        </div> 
      </ul>
    </div>

  )
}

export default Sidebar