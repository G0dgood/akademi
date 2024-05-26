import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";

import ProfileDropDown from './ProfileDropDown';

import SearchInput from './SearchInput';
import Bell from '../assets/svg/Bell';
import Settings from '../assets/svg/Settings';


const Header = ({ pageTitle }: any) => {


  // @ts-ignore  
  const userInfo = JSON.parse(localStorage.getItem("taskmaneger"));

  const [notification, setNotification] = useState(false)
  const [createTask, setCreateTask] = useState(false)
  const [profile, setProfile] = useState(false)
  const [showTask, setShowTask] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  // useEffect(() => {
  //   if (notification) {
  //     setCreateTask(false)
  //     setProfile(false)
  //   } else if (createTask) {
  //     setNotification(false)
  //     setProfile(false)
  //   } else if (profile) {
  //     setNotification(false)
  //     setCreateTask(false)
  //   }
  // }, [createTask, notification, profile])




  const [title, setTitle] = useState("Super | Task Manager");
  document.title = title;

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    if (window.location.pathname === "/home") {
      setTitle("STM | Dashboard");
    } else if (window.location.pathname === "/admindashboard") {
      setTitle("STM | Dashboard");
    }
  }, [title]);

  return (
    <div id="header">
      <div className="header-pageTitle">{pageTitle}</div>

      <div className='FaPlus-icon-container' >
        <SearchInput />
        <span className='faPlus-icon-container'>
          <Bell />
        </span>
        <span className='faPlus-icon-container'>
          <Settings />
        </span>
        <span className='header-name-container'>
          <h3>Nabila A.</h3>
          <p>Admin</p>
        </span>
        <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
          {profile && <ProfileDropDown />}
        </span>
      </div>
    </div>
  )
}

export default Header;





