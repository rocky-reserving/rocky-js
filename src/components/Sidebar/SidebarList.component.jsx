import propTypes from "prop-types";

// import SidebarListData from "./triSidebar.data";
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
    <div id="sidebar-list" className='mt-5'>
      {/*<ul key={uuidv4()} className='flex flex-col'>
        {SidebarListData.map((item, index) => {
          return (
            <>
            {(item['type'] === "list") && (
              <li key={'li-' + index} alt={item['data']['alt']} className={`hover:bg-gradient-radial mb-4 justify-items-center ${isOpen ? "pl-3" : "pl-1"}`}>
                {isOpen ? (
                  <button key={'button-' + index} className='grid grid-cols-[1fr_5fr] justify-between' onClick={() => sidebarClick(item['data']['args']['click'])}>
                    <span key={'sidebar-icon-' + index} className='col-span-1'>{item['data']['icon']==="NONE" ? "" : item['data']['icon']}</span>
                    <span key={'sidebar-list-item-' + index} className='text-black pl-3 pr-3 col-auto hover:text-slate-700'>{item['data']['name']}</span>
                  </button>
                ) : (
                  <button key={'button-' + index} className='grid grid-cols-[1fr_5fr] justify-between' onClick={() => sidebarClick(item['data']['args']['click'])}>
                    <span key={'sidebar-icon-' + index} className='col-span-1'>{item['data']['icon']==="NONE" ? "" : item['data']['icon']}</span>
                  </button>
                )}
                
              </li>
            )}
            {(item['type'] === "divider") && (
              <li key={'li-' + index} className='flex flex-auto flex-row shadow-sm hover:bg-gradient-radial pl-3 pr-3 mb-4'>
                <span key={'divider-' + index} className='text-black pl-3 pr-3 text-9xl'><hr /></span>
              </li>
            )}
            </>
          )
        })}
        </ul>*/}
    </div>
  )
}

SidebarList.propTypes = {
  isOpen: propTypes.bool.isRequired
};

export default SidebarList;