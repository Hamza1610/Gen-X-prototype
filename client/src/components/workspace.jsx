import { Button, ButtonToolbar, Container } from 'react-bootstrap';
import '../styles/workspace.css';

export default  function Workspace(props) {
    /* const {} = props */

    const viewContent = () => {

    }
    

    return (
        <div className='workspace-component'>
            { /*  Workspace component can be different type of work, media, research tools. Can be added as a component*/}
            <ButtonToolbar className='menu-tray'>
                <Button className='btn-menu' id='view-btn'><i className='fas fa-folder-closed'></i><span className='menu-option-label'>View</span></Button>
                <Button className='btn-menu' id='download-btn'><i className='fas fa-download'></i><span className='menu-option-label'>Download</span></Button>
                <Button className='btn-menu' id='search-btn'><i className='fab fa-searchengine'></i><span className='menu-option-label'>Search</span></Button>
            </ButtonToolbar>
            <Container className='workspace-content-board'>
                   <Container className='panel view-container hide-board'>
                        View
                   </Container>
                   
                   <Container className='panel download-action-container hide-board'>
                        Download
                   </Container>

                   <Container className='panel search-action-container hide-board'>
                        Search
                   </Container>
            </Container>
        </div>
    )
}
