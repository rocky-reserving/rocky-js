import propTypes from 'prop-types';
import Button from '../components/Button/Button.component';
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
              <Button buttonText={"Start"} handleClick={() => setPage('workbench')}/>
              <Button buttonText={"Settings"} handleClick={() => setPage('settings')}/>
              <Button buttonText={"Docs"} handleClick={() => setPage('docs')}/>
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