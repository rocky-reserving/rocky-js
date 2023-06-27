import propTypes from 'prop-types';
import Navbar from "../components/Navbar/Navbar.component";

const LandingPage = ({page, setPage}) => {
  return (
    <>
      {(page === 'landing') && (
        <>
          <Navbar setPage={setPage}/>
          <header className='main-landing-container'>
            <h1>rocky</h1>
            <div className="main-landing-buttons p-[5px]"> 
              <button className="main-landing-button">Start</button>
              <button className="main-landing-button">Settings</button>
              <button className="main-landing-button">Docs</button>
            </div>
          </header>
        </>
      )}
    </>
  );
}

LandingPage.propTypes = {
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired
}

export default LandingPage;