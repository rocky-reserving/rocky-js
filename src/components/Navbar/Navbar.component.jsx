import propTypes from 'prop-types'
import navbarData from './navbar.data.json'
import './navbar.styles.css'

const Navbar = ({setPage}) => {
  const handleClick = (e) => {
    // get the navbar item that was clicked
    const item = e.target.closest('.navbar-item');
    const navID = item.getAttribute('id');
    
    // split navID into an array of strings by '-', and get the last element of the array
    const navIDNum = navID.split('-').pop()

    // get the navbar item's page value from the json file
    const newPage = navbarData['navbarData'][navIDNum]['page']
    console.log(newPage)

    // set the page state to the new page
    setPage(newPage)
    
  }

  return (
    <nav id='navbar'>
        <ul className='flex flex-col'>
          {navbarData['navbarData'].map((item, index) => {
            let tempClasses = 'navbar-item';
            navbarData['navbarData'][index]['classes'].map((cls) => {tempClasses += ' ' + cls})
            return (
              <li key={index} id={`navbar-item-${item.id}`} className={tempClasses} onClick={handleClick}>
                {item.img ? <> <img src={item.img} alt={item.name} /> <h3>{item.name}</h3> </> : <h3>{item.name}</h3>}
              </li>
            )})
          }
        </ul>
      </nav>
    )
}

Navbar.propTypes = {
  setPage: propTypes.func.isRequired
}

export default Navbar