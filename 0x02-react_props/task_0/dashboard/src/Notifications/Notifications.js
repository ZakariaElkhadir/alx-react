import React from 'react';
import './Notifications.css';
import exit from '../assets/x.png'
import { getLatestNotification } from '../utils/utils';
function Notifications(){
    return (
        <>
            <div className='Notifications'>
                <button style={{ float: 'right', border: 'none', background: 'none', padding: 0 }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                    <img src={exit} alt="Close" width={10}/>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
                </ul>
            </div>
        </>
    )
}
export default Notifications;