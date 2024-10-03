import { Form, FormControl, FormSelect } from 'react-bootstrap'
import '../styles/settings.css';
import FormRange from 'react-bootstrap/esm/FormRange';

export default function Settings() {
  return (
    <div className="settings-component">
        <div className="ui-settings">
            <h3 className='setting-label'>UI settings</h3>
            <div className="settings-groups">
                <div className='setting'>
                    <span>Theme</span>
                    <FormSelect style={{width: '20%'}} name="theme" id="theme">
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </FormSelect>
                </div>
                <div className='setting'>
                    <span>Font</span>
                    <FormControl type='number' defaultValue={4} style={{width: '20%', marginLeft: '5px'}}/>
                </div>
            </div>
        </div>

        <div className="permissions-settings">
            <h3 className='setting-label'>Permissions</h3>
            <div className="setting-groups">
                <div className='setting'>
                    <span>Voice</span>
                    <FormControl type='checkbox' defaultValue={4} style={{width: '20%', marginLeft: '5px'}}/>                
                </div>

                <div className='setting'>
                    <span>Speaker</span>
                    <FormControl type='checkbox' defaultValue={4} style={{width: '20%', marginLeft: '5px'}}/>                
                </div>
            </div>
        </div>
    </div>
  )
}
