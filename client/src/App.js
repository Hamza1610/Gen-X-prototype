import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import LandingPage from './pages/index';
import GetStartedPage from './pages/GetStarted';
import NotFound from './pages/NotFound';

function App() {

  return (
    // remove style when done and paste to getstarted
    <div className="App" style={{
      height: '100vh'
    }}>

    {/*  use the App class for settings: styles, animation etc. */}
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' Component={ LandingPage }  />
        <Route path='/get-started' Component={ GetStartedPage } />
        <Route path='*' Component={ NotFound } />
      </Routes>
    </div> 
    </BrowserRouter> 

  </div>
  );
}

export default App;
