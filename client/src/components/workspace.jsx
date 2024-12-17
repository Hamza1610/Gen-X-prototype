import { useEffect } from 'react';
import annyang from 'annyang';
import axios from 'axios';
import { Button, ButtonToolbar, Container } from 'react-bootstrap';
import '../styles/workspace.css';

export default function Workspace(props) {

    // Function to check internet connectivity
    const checkInternetConnection = () =>  {
        if (!navigator.onLine) {
            speakMessage('You not connected to the internet!')
            return
        }
        return
    }
    // Function to speak messages
    const speakMessage = (message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    }
    
    const hideAllPanels = () => {
        document.querySelectorAll('.panel').forEach(panel => panel.classList.add('hide-board'));
    };

    const viewContent = async () => {
        checkInternetConnection()
        console.log("Fetching content to view...");
        try {
            // Example: Fetch content (replace with actual API)
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            const { title, body } = response.data;

            // Display the fetched content
            const viewPanel = document.querySelector('.view-container');
            hideAllPanels();
            if (viewPanel) {
                viewPanel.classList.remove('hide-board');
                viewPanel.innerHTML = `
                    <h3>${title}</h3>
                    <p>${body}</p>
                `;
            }
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    };

    const searchDocuments = async () => {
        checkInternetConnection()
        speakMessage("What do you want to search for?");
        const query = prompt("What do you want to search for?");
        if (!query) return;

        console.log(`Searching for: ${query}`);
        try {
            // Example: Search content (replace with actual API)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3`);
            const results = response.data;

            const searchPanel = document.querySelector('.search-action-container');
            hideAllPanels();
            if (searchPanel) {
                searchPanel.classList.remove('hide-board');
                searchPanel.innerHTML = `
                    <h4>Search Results for: "${query}"</h4>
                    ${results.map(item => `<p><strong>${item.title}</strong>: ${item.body}</p>`).join('')}
                `;
            }
        } catch (error) {
            console.error("Error searching documents:", error);
        }
    };

    const downloadFile = () => {
        checkInternetConnection()
        speakMessage("Enter the file URL to download:");
        const fileUrl = prompt("Enter the file URL to download:");
        if (!fileUrl) return;

        console.log(`Downloading file from: ${fileUrl}`);
        try {
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileUrl.split('/').pop();
            link.click();

            const downloadPanel = document.querySelector('.download-action-container');
            hideAllPanels();
            if (downloadPanel) {
                downloadPanel.classList.remove('hide-board');
                downloadPanel.innerHTML = `<p>File download initiated: <a href="${fileUrl}" target="_blank">${fileUrl}</a></p>`;
            }
        } catch (error) {
            console.error("Error initiating download:", error);
        }
    };

    useEffect(() => {
        if (annyang) {
            const commands = {
                'view content': viewContent,
                'search documents': searchDocuments,
                'download file': downloadFile,
            };

            annyang.addCommands(commands);
            annyang.start();
        }

        return () => {
            if (annyang) annyang.abort();
        };
    }, []);

    return (
        <div className='workspace-component'>
            <ButtonToolbar className='menu-tray'>
                <Button className='btn-menu' id='view-btn' onClick={viewContent}>
                    <i className='fas fa-folder-closed'></i>
                    <span className='menu-option-label'>View</span>
                </Button>
                <Button className='btn-menu' id='download-btn' onClick={downloadFile}>
                    <i className='fas fa-download'></i>
                    <span className='menu-option-label'>Download</span>
                </Button>
                <Button className='btn-menu' id='search-btn' onClick={searchDocuments}>
                    <i className='fab fa-searchengin'></i>
                    <span className='menu-option-label'>Search</span>
                </Button>
            </ButtonToolbar>

            <Container className='workspace-content-board'>
                <Container className='panel view-container hide-board'>View</Container>
                <Container className='panel download-action-container hide-board'>Download</Container>
                <Container className='panel search-action-container hide-board'>Search</Container>
            </Container>
        </div>
    );
}
