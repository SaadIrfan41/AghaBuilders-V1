import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navigation = (props) => {
  const location = useLocation()

  useEffect(() => {
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.addEventListener('load', resolve)
        script.addEventListener('error', reject)
        document.body.appendChild(script)
        document.body.removeChild(script)
      })
    }

    loadScript('./assets/js/masonary.js')
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <div
      className={
        props.bgcolor !== ''
          ? `header-nav navbar-collapse collapse ${props.bgcolor}`
          : 'header-nav navbar-collapse collapse'
      }
    >
      <ul className='nav navbar-nav'>
        <li className={isActive('/') ? 'active' : ''}>
          <NavLink to='/'>Home</NavLink>
          {/* <ul className='sub-menu'>
            <li>
              <NavLink to='/'>Home-1</NavLink>
            </li>
            <li>
              <NavLink to='/homepage2'>Home-2</NavLink>
            </li>
            <li>
              <NavLink to='/homepage3'>Home-3 boxed style</NavLink>
            </li>
            <li>
              <NavLink to='/homepage4'>Home-4</NavLink>
            </li>
          </ul> */}
        </li>

        <li className={isActive('/services') ? 'active' : ''}>
          <NavLink to='/services'>Services</NavLink>
        </li>

        <li
          className={
            location.pathname.includes('/House') ||
            location.pathname.includes('SupremeCourtPakistan')
              ? 'active'
              : ''
          }
        >
          <NavLink to='/ProjectsPortfolio'>Projects</NavLink>
          <ul className='sub-menu'>
            <li>
              <NavLink to='/SupremeCourtPakistan'>
                Supreme Court of Pakistan
              </NavLink>
            </li>
            <li>
              <NavLink to='/House349'>House 349</NavLink>
            </li>
            <li>
              <NavLink to='/House08'>House 08</NavLink>
            </li>
            <li>
              <NavLink to='/House354'>House 354</NavLink>
            </li>
            <li>
              <NavLink to='/CHElectronics'>CH Electronics</NavLink>
            </li>
            <li>
              <NavLink to='/UnionCafe'>Union Cafe</NavLink>
            </li>
            <li>
              <NavLink to='/RendezvousXpress'>Rendezvous Xpress</NavLink>
            </li>
            <li>
              <NavLink to='/SuzukiMotors'>Suzuki Islamabad Motors</NavLink>
            </li>
            <li>
              <NavLink to='/BOPDemolition'>BOP Demolition</NavLink>
            </li>
            <li>
              <NavLink to='/Plaza232'>Plaza 232</NavLink>
            </li>
            <li>
              <NavLink to='/TechnoEngineering'>Techno Engineering</NavLink>
            </li>
            <li>
              <NavLink to='/SikaInstallations'>Sika</NavLink>
            </li>
          </ul>
        </li>

        {/* <li className={isActive('/error') ? 'active' : ''}>
          <NavLink to=''>Pages</NavLink>
          <ul className='sub-menu'>
            <li>
              <NavLink to='/error'>Error 404</NavLink>
            </li>
          </ul>
        </li> */}

        <li className={isActive('/Gallery') ? 'active' : ''}>
          <NavLink to='/Gallery'>Gallery</NavLink>
        </li>
        <li className={isActive('/about') ? 'active' : ''}>
          <NavLink to='/about'>About us</NavLink>
        </li>
        <li className={isActive('/contactus') ? 'active' : ''}>
          <NavLink to='/contactus'>Contact us</NavLink>
        </li>
        <li className={isActive('/blog-listing') ? 'active' : ''}>
          <NavLink to='/blog-listing'>Blogs</NavLink>
        </li>
        <li className={isActive('/faq') ? 'active' : ''}>
          <NavLink to='/faq'>FAQ</NavLink>
        </li>
{/* 
        <li className={location.pathname.startsWith('/post') ? 'active' : ''}>
          <NavLink to=''>Post detail</NavLink>
          <ul className='sub-menu'>
            <li>
              <NavLink to='/post-image'>Post Image</NavLink>
            </li>
            <li>
              <NavLink to='/post-gallery'>Post Gallery</NavLink>
            </li>
            <li>
              <NavLink to='/post-video'>Post Video</NavLink>
            </li>
            <li>
              <NavLink to='/post-sidebar'>Post Right Sidebar</NavLink>
            </li>
          </ul>
        </li> */}

        {/* <li
          className={
            location.pathname.startsWith('/icon')
              ? 'submenu-direction active'
              : 'submenu-direction'
          }
        >
          <NavLink to=''>Shortcodes</NavLink>
          <ul className='sub-menu'>
            <li>
              <NavLink to='/accordian'>Accordian</NavLink>
            </li>
            <li>
              <NavLink to='/button'>Button</NavLink>
            </li>
            <li>
              <NavLink to='/iconboxstyle'>Icon box style</NavLink>
            </li>
            <li>
              <NavLink to='/listgroup'>List group</NavLink>
            </li>
            <li>
              <NavLink to='/modalpopup'>Modal popup</NavLink>
            </li>
            <li>
              <NavLink to='/tabs'>Tabs</NavLink>
            </li>
            <li>
              <NavLink to='/table'>Table</NavLink>
            </li>
            <li>
              <NavLink to='/video'>Video</NavLink>
            </li>
            <li>
              <NavLink to='/iconfont'>Icon Font</NavLink>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  )
}

export default Navigation