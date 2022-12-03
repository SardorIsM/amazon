import React from 'react';
import "./Sidebar.css";
import { FiX } from 'react-icons/fi';
import SidebarInfo from "../../dummy-data-sidebar.json"
import {GrFormNext} from 'react-icons/gr'
import { v4 as uuidv4 } from 'uuid';

const Sidebar = ({ isSidebarActive, setIsSidebarActive }) => {

  return (
    <div className={isSidebarActive === true ? "sidebar sidebaractive" : "sidebar"}>
      <FiX onClick={() => {
        setIsSidebarActive(false)
      }} />
      {
        SidebarInfo.map((sidebar) =>
          <ul key={uuidv4()} className='sidebarTitle'>
            {sidebar.title}
            {
              sidebar.tags.map((info) =>
                <div key={uuidv4()} className='icon' onClick={() => {}}>
                  <li className='sidebarItem'>{info}</li>
                  <GrFormNext className='icons'/>
                </div>
              )
            }
          </ul>
        )
      }
    </div>
  )
}

export default Sidebar