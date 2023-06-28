import propTypes from "prop-types";

import triSidebarData from "./triSidebar.data";
// import { v4 as uuidv4 } from 'uuid';


const SidebarList = ({isOpen}) => {
  // const sidebarClick = (type) => {
  //   if (type === "new-model") {
  //     console.log(`${type} sidebar click`)
  //   } else if (type === "load-model") {
  //     console.log(`${type} sidebar click`)
  //   } else if (type === "read-docs") {
  //     console.log(`${type} sidebar click`)
  //   };
  // };
  console.log(isOpen)

  return (
    <div id="sidebar-list">
      <ul>
        {triSidebarData["sidebarData"]["items"].map(({id, type, text, icon}) => (
          <li key={id} onClick={() => console.log(`${type} sidebar click`)}>
            <div className="sidebar-list-item">
              <div className="sidebar-list-item-icon">
                {icon}
              </div>
              <div className="sidebar-list-item-text">
                {text}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

SidebarList.propTypes = {
  isOpen: propTypes.bool.isRequired
};

export default SidebarList;