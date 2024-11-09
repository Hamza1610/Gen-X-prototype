import '../styles/App.css';
// import backgroundImage from 'ai_header.jpeg'
import { useState } from 'react';
import '../styles/get_started.css';
import { Container, Button, Navbar } from 'react-bootstrap'
import Settings from '../components/settings';
import Workspace from '../components/workspace';

function GetStartedPage() {
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
    <Navbar style={{width: '100vw', height: '50px', marginBotton: '10px'}}>
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
        <Container className='space-container' hidden={showTab.showSpaceTab}>
          <Workspace />
        </Container>
        <Container className='settings-container' hidden={showTab.showSettingTab}>
          <Settings />
        </Container>
      </main>
    </Container>
  </div>
  )}
export default GetStartedPage;
