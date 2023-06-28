import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";
// import Triangle from '../components/Triangle/Triangle.component';

const Settings = ({page, setPage}) => {
  return (
    <>
      {(page === 'settings') && (
        <>
          <Navbar setPage={setPage}/>
          <h1>Settings</h1>
          {/* <Triangle ay={[0,1,2,3]} dev={[12,24,36,48]} data={[[0,1,2,3],[3,4,5,NaN],[6,7,NaN,NaN],[8,NaN,NaN,NaN]]}/> */}
          
        </>
      )}
    </>
  );
}

Settings.propTypes = {
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired
}

export default Settings;