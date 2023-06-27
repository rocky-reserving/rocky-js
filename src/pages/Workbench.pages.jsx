import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";
import BlankWindow from "../components/BlankWindow/BlankWindow.component";

const Workbench = ({page, setPage}) => {
  return (
    <>
      {(page === 'workbench') && (
        <>
      <Navbar setPage={setPage} />
      <div>
      <BlankWindow windowType={"loadData"}/>
      <h1>Workbench</h1>
      </div>
      </>
      )}
    </>
  );
}

Workbench.propTypes = {
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired
}

export default Workbench;