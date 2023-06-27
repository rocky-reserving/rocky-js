import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";
import Triangle from '../components/Triangle/Triangle.component';
import BlankWindow from '../components/BlankWindow/BlankWindow.component';

const Settings = ({page, setPage}) => {
  return (
    <>
      {(page === 'settings') && (
        <>
          <Navbar setPage={setPage}/>
          <h1>Settings</h1>
          <BlankWindow>
            <Triangle ay={[0,1,2]} dev={[12,24,36]} data={[[0,1,2],[3,4,NaN],[6,NaN,NaN]]}/>
          </BlankWindow>
          
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