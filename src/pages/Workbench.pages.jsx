import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";
import Button from "../components/Button/Button.component";
import Sidebar from '../components/Sidebar/Sidebar.component';

const Workbench = ({page, setPage, workbenchState, setWorkbenchState}) => {
  
  return (
    <>
      {(page === 'workbench') && (
        <>
      <Navbar setPage={setPage} />
      <div className='workbench-main-page'>
        <Sidebar />
        <Button buttonText={"Add Triangle"} handleClick={() => console.log('added triangle')} />
      </div>
      </>
      )}
    </>
  );
}

Workbench.propTypes = {
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired,
  workbenchState: propTypes.array.isRequired,
  setWorkbenchState: propTypes.func.isRequired
}

export default Workbench;