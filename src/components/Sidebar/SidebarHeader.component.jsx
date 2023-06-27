import propTypes from 'prop-types';
import Hamburger from "hamburger-react"

// import { GiBoxingGlove } from "react-icons/gi";

const SidebarHeader = ({isOpen, handleHamburgerClick}) => {
  return (
    <div id="sidebar-header" className='flex flex-row bg-slate-500 bg-opacity-90'>
      { isOpen && <h2 id='sidebar-heading-text' className='flex-auto text-white pl-4 pt-2 text-2xl '>rocky</h2> }
      <Hamburger id='sidebar-heading-hamburger' color="white" toggled={isOpen} onToggle={handleHamburgerClick} />
    </div>
  )
}

SidebarHeader.propTypes = {
  isOpen: propTypes.bool.isRequired,
  handleHamburgerClick: propTypes.func.isRequired
};

export default SidebarHeader;