import '../styles/App.css';
// import backgroundImage from 'ai_header.jpeg'
import { Container, Button, Navbar, Image, ButtonToolbar } from 'react-bootstrap'

function GetStartedPage() {
  return (
    <div className="App " style={{
        height: '100vh'
      }}>
        <Navbar>
            <Navbar.Brand>
                {/* A gif image that suit Gen-X */}
                <Image src='.gif'/>
            </Navbar.Brand>
        </Navbar>
        <Container>
            <aside>
                <Button><i className='fas fa-server'>Space</i></Button>
                <Button><i className='fas fa-wrench'></i>Settings</Button>
            </aside>
            <main>

            </main>
        </Container>
        <ButtonToolbar className='mobile-menu-tray' hidden>
            <Button><i className='fas fa-server'></i></Button>
            <Button><i className='fas fa-wrench'></i></Button>
        </ButtonToolbar>
    </div>
  );
}

export default GetStartedPage;
