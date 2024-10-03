// import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useState } from 'react';
import LangingPage from './pages';
import GetStartedPage from './pages/get_started';
import { Container, Button, Navbar, Image, ButtonToolbar, Tab, Tabs } from 'react-bootstrap'
import Settings from './components/settings';

function App() {

  const [showTab, setShowTab] = useState({
    showSpaceTab: false, 
    showSettingTab: true, 
  });


  const showSettings = () => {
    setShowTab({
      showSpaceTab: true, 
      showSettingTab: false, 
    })
    console.log(showTab);
  }

  const showSpace = () => {
    setShowTab({
      showSpaceTab: false, 
      showSettingTab: true, 
    })

    console.log(showTab);
  }

  return (
    // remove style when done and paste to getstarted
    <div className="App" style={{
      height: '100vh'
    }}>


    {/* /* UI version 1 */ }
    <Navbar style={{width: '100vw', height: '50px'}}>
      <Navbar.Brand style={{float: 'left', margin: '10px', fontSize: '2em', fontStyle: 'italic'}}>
        {/* A gif image that suit Gen-X */}
        Gen-X
      </Navbar.Brand>
    </Navbar>
    <Container>
      <aside>
        <Button id='space-btn' onClick={(event) => showSpace(event)}><i className='fas fa-server'>Space</i></Button>
        <Button id='settings-btn' onClick={(event) => showSettings(event)}><i className='fas fa-wrench'></i>Settings</Button>
      </aside>
      <main>
        <Container className='space-container' hidden={showTab.showSpaceTab} style={{ width: '100vw'}}>
          <h4 className='tab-label'>Space</h4>
        </Container>
        <Container className='settings-container' hidden  style={{width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <h4 className='tab-label' style={{ textAlign: 'start'}}>Settings</h4>
          <Settings />
        </Container>
      </main>
    </Container>
    <ButtonToolbar className='mobile-menu-tray' hidden>
      <Button><i className='fas fa-server'></i></Button>
      <Button><i className='fas fa-wrench'></i></Button>
    </ButtonToolbar>

    {/* use the App class for settings: styles, animation etc. */}
    {/* <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' Component={ LangingPage }  />
        <Route path='/get-started' Component={ GetStartedPage } />
      </Routes>
    </div> 
    </BrowserRouter>  */}

  </div>
  );
}

export default App;
