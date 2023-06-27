import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";
import BlankWindow from "../components/BlankWindow/BlankWindow.component";
import Button from "../components/Button/Button.component";

const Workbench = ({page, setPage, workbenchState, setWorkbenchState}) => {
  
  return (
    <>
      {(page === 'workbench') && (
        <>
      <Navbar setPage={setPage} />
      <div>
        <Button buttonText={"Add Triangle"} handleClick={() => console.log('added triangle')} />
      </div>
        <BlankWindow windowType={"loadData"}/>
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