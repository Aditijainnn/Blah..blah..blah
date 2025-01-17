import React from 'react'
import "./Sidebar.css"

import { FaTimes} from 'react-icons/fa'
import {sidebar} from "../../source"
import { profile6, profile7 } from '../../assets/images'
import { FaSquarePen } from 'react-icons/fa6'
import { Tractor } from 'lucide-react'
import { Route, Routes } from 'react-router-dom'


const Sidebar = ({
    show,
    onClose,
}) => {
  return (
    <>
    {
      show ? (<div className='sidebar__overlay' onClick={onClose}></div>):''
    }
        <aside className={`sidebar ${show ?'show':''}`}>
          <div className="top">
            <div className="logo__container">
              <Tractor className="icon"/>
              <span>Snack<span className='text-primary'>Flips</span></span>
            </div>
            <div className="icon__container cancel__btn" onClick={onClose}>
            <FaTimes/>
            </div>
          </div>
          <div className="middle">
          <button className="btn btn__primary">
            <FaSquarePen/>
            <span> New Message </span>
          </button>
          <div className="tabs__container">
            {
              sidebar.map((list,index)=>(
                <h3 className={`tab ${list.route === "/" ? 'active':''}`} key={index}>
                  {list.icon}
                  <span className="name">{list.name}</span>
                  {
                    list.notificationCount ?
                    <div className="count">{list.notificationCount}</div>:
                    ""
                  }
                </h3>
              ))
            }
          </div>
          <h4 className="text__muted">Recent Chats</h4>
          <div className="chat__container">
            {/* Start chat */}
            <div className="chat">
              <div className="profile">
                <img src={profile6} alt="" />
              </div>
              <div className="detail">
                <h4>Radhika Vasani</h4>
                <small className="text__muted">
                All Ingredient in sector 20 are already delivered. Did You recieve them?
                </small>
              </div>
              <div className="dot status">

              </div>
            </div>
            {/* End chat */}

            {/* Start chat */}
            <div className="chat">
              <div className="profile">
                <img src={profile7} alt="" />
              </div>
              <div className="detail">
                <h4>Ravi Mehta</h4>
                <small className="text__muted">
                Yes, They're being supervised by Gaurav.
                </small>
              </div>
              <div className="dot status">

              </div>
            </div>
            {/* End chat */}
          </div>
          </div>
        </aside>
    </>
  )
}

export default Sidebar