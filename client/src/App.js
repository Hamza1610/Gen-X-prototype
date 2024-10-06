import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import LangingPage from './pages';
import GetStartedPage from './pages/get_started';
import './styles/get_started.css';

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
        <Route path='/' Component={ LangingPage }  />
        <Route path='/get-started' Component={ GetStartedPage } />
      </Routes>
    </div> 
    </BrowserRouter> 

  </div>
  );
}

export default App;
