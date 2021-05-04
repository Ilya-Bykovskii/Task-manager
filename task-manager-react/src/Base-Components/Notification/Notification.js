import React from "react";
import {bounce} from "react-animations";

import './Notification.scss'

export default function Notification({props}) {
    const type = props.type,
        message = props.messege;

    const content = {
        types:{
            'warning': 'warning-notitfaction',
            'error': 'error-notitfaction',
        },
        messages: {
            'taskCreate': 'The task must have a name',
        }
    }

    return (
        <div className={`notification warning-notitfaction`}>
            <p>{content.messages.taskCreate}</p>
        </div>
    )
}