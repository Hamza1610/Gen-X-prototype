import { Button, ButtonToolbar, Container } from 'react-bootstrap';
import '../styles/workspace.css';

export default  function Workspace(props) {
    /* const {} = props */

    return (
        <div className='workspace-component'>
            { /*  Workspace componant can be different type of work, media, research tools. Can be added as a component*/}
            <ButtonToolbar className='menu-tray'>
                <Button className='btn-menu'><i className='fas fa-folder-closed'></i>View</Button>
                <Button className='btn-menu'><i className='fas fa-download'></i>Download</Button>
                <Button className='btn-menu'><i className='fab fa-searchengine'></i>Search</Button>
            </ButtonToolbar>
            <Container className='workspace-content-board'>
                     
            </Container>
        </div>
    )
}
