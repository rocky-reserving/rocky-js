// react
import { useEffect, useState } from 'react';

// components
import LandingPage from './pages/LandingPage.pages';
import Workbench from './pages/Workbench.pages';
import Settings from './pages/Settings.pages';
import Documentation from './pages/Documentation.pages';
// import pagesList from './pages/pagesList.data';

// list of all pages
// const all_pages = pagesList.map((page) => page.name);
const all_pages = ['landing', 'workbench', 'settings', 'docs'];

// styling
import './App.css';

// redux
// import { useSelector, useDispatch } from 'react-redux';
// import { get as getPage, set as setPage } from './redux/slices/page.slice';
// import {
//   get as getCurPage,
//   set as setCurPage,
// } from './redux/slices/curPage.slice';

// rocky state
// import rockyState from './rocky/rockyState';

function App() {
  // state vars for page navigation
  const [page, setPage] = useState('landing');
  const [curPage, setCurPage] = useState('landing');

  // state vars for maintaining models and triangles in memory
  const [workbenchState, setWorkbenchState] = useState([]);

  // state vars for maintaining rocky state
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
      <Workbench
        page={page}
        setPage={setPage}
        workbenchState={workbenchState}
        setWorkbenchState={setWorkbenchState}
      />
      <Settings page={page} setPage={setPage} />
      <Documentation page={page} setPage={setPage} />
    </>
  );
}

export default App;
