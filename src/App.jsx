// react
import { useEffect, useState } from 'react';

// components
import LandingPage from './pages/LandingPage.pages';
import Workbench from './pages/Workbench.pages';
import Settings from './pages/Settings.pages';
import Documentation from './pages/Documentation.pages';

// styling
import './App.css'

// rocky state
// import rockyState from './rocky/rockyState';

 const all_pages = [
  'landing',
  'workbench',
  'settings',
  'docs'
]

function App() {
  const [page, setPage] = useState('landing');
  const [curPage, setCurPage] = useState('landing');
  
  // const [rky, setRky] = useState(rockyState);

  // validate that the selected page is in the list of all pages
  useEffect(() => { 
    // if not, set to last allowed page
    if (!all_pages.includes(page)) {
      setPage(curPage);
    } // if so, set the current page to the selected page
    else {
      setCurPage(page);
    }
  }, [page, curPage]);


  return (
    <>
      <LandingPage page={page} setPage={setPage} />
      <Workbench page={page} setPage={setPage} />
      <Settings page={page} setPage={setPage} />
      <Documentation page={page} setPage={setPage} />
    </>
  );
}

export default App;