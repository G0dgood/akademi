import { NavLink } from 'react-router-dom';
import { LuUsers } from "react-icons/lu";
import { HiOutlineCalendar, HiOutlineRectangleStack } from "react-icons/hi2";
import { MdInsights } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

import Students from '../assets/svg/Students';
import Home from '../assets/svg/Home';
import Teachers from '../assets/svg/Teachers';
import Events from '../assets/svg/Events';
import Finance from '../assets/svg/Finance';
import Food from '../assets/svg/Food';
import User from '../assets/svg/User';
import Chat from '../assets/svg/Chat';
import Activity from '../assets/svg/Activity';




const SideNav = () => {



  return (
    <div id="side-nav">
      <div className="logo-area">
        <div className="logo-area-img">A</div>
        <h2>Akademi</h2>
      </div>
      <nav>

        <NavLink to="/dashboard" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>

          <Home size={25} />
          <span>Dashboard</span>
        </NavLink>





        <div className='nav-link-bar'>
          <NavLink to="/students" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }>
            <Students size={25} />
            <span>Students</span>
          </NavLink>
        </div>




        <NavLink to="/teachers" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <Teachers size={25} />
          <span>Teachers</span>
        </NavLink>

        <NavLink to="/events" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <Events size={25} />
          <span>Event</span>
        </NavLink>

        <NavLink to="/finance" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <Finance size={25} />
          <span>Finance</span>
        </NavLink>


        <NavLink to="/food" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <Food size={25} />
          <span>Food</span>
        </NavLink>

        <NavLink to="/user" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <User size={25} />
          <span>User</span>
        </NavLink>

        <NavLink to="/chat" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <Chat size={25} />
          <span>Chat</span>
        </NavLink>

        <NavLink to="/lastestactivity" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <Activity size={25} />
          <span>Lastest Activity</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default SideNav;