import { nodeTypeFromType } from '@cfaester/enzyme-adapter-react-18/dist/enzyme-adapter-utils'
import React from 'react'

const NotificationItem = ({type, html, value}) => {
    return (
        <li data-notification-type={type}>
            {html ? (
                <span dangerouslySetInnerHTML={{ __html: html }}></span>
            ) : (
                value
            )}
        </li>
    );
}
export default NotificationItem;