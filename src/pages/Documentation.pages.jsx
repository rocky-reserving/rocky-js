import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";

const Documentation = ({page, setPage}) => {
  return (
    <>
      {(page === 'docs') && (
        <>
      <Navbar setPage={setPage}/>
      <h1>Documentation</h1>
        </>
      )}
    </>
  );
}

Documentation.propTypes = {
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired
}

export default Documentation;