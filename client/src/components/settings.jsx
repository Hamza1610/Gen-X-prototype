import { Button, Form, FormControl, FormSelect } from 'react-bootstrap'
import '../styles/settings.css';
import { useState } from 'react';
import { languages } from '../constants/language';

export default function Settings() {

    console.log('Lang:', languages);
    
    const [theme, setTheme] = useState(localStorage.getItem('Theme') || 'dark');
    const [font, setFont] = useState(localStorage.getItem('Font') || '1em');

    const saveSettings = () => {
        localStorage.setItem('Theme', theme)
        localStorage.setItem('Font', font)

        console.log(localStorage);
    }
    return (
        <div className="settings-component">
            <div className="ui-settings">
                <h3 className='setting-label'>UI settings</h3>
                <div className="settings-groups">
                    <div className='setting'>
                        <span>Theme</span>
                        <FormSelect defaultValue={localStorage.getItem('Theme')} style={{width: '20%'}} name="theme" id="theme" onSelect={(e) => setTheme(e.target.value)}>
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </FormSelect>
                    </div>
                    <div className='setting'>
                        <span>Font</span>
                        <FormControl  type='text' defaultValue={localStorage.getItem('Font')} style={{width: '20%', marginLeft: '5px'}} onChange={(e) => setFont(e.target.value )} />
                    </div>
                </div>
            </div>

            <div className="permissions-settings">
                <h3 className='setting-label'>Preference</h3>
                <div className="setting-groups">
                    <div className='setting'>
                        <span>Languages</span>
                        <FormSelect type='checkbox'style={{width: '20%', marginLeft: '5px'}}>
                            {languages && languages.map((language) => (
                                <option>{language[0]}</option>
                            ))}
                        </FormSelect>

                    </div>

                </div>
            </div>
            <button className="btn" onClick={() => saveSettings()}>Save</button>
        </div>
    )
}
