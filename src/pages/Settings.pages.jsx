import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";

const Settings = ({page, setPage}) => {
  return (
    <>
      {(page === 'settings') && (
        <>
      <Navbar setPage={setPage}/>
      <h1>Settings</h1>
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