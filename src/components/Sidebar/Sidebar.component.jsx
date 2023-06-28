import {useEffect, useState} from 'react';

import SidebarHeader from "./SidebarHeader.component";
import SidebarList from "./SidebarList.component";

import './sidebar.styles.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCountingDown, setIsCountingDown] = useState(true);
    
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsCountingDown(false);
    }
  }

  const handleMouseOverSidebar = () => {
    setIsCountingDown(false);
  }

  const handleMouseLeavesSidebar = () => {
    setIsCountingDown(true);
  }

  // close sidebar after 2 seconds
  useEffect(() => {
    if (isCountingDown) {
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  }, [isCountingDown]);

  return (
    <div className={`sidebar-main${isOpen ? " sidebar-open" : ""}`} onMouseEnter={handleMouseOverSidebar} onMouseLeave={handleMouseLeavesSidebar}>
      <SidebarHeader isOpen={isOpen} handleHamburgerClick={handleHamburgerClick}/>
      <SidebarList isOpen={isOpen} />
    </div>
  )
}

export default Sidebar;