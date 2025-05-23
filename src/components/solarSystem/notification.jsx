import PropTypes from 'prop-types';
import React from 'react';

export const Notification = ({message}) => {
    
    return (
        <p>{message}</p>
    )
}

Notification.PropTypes = {
    message: PropTypes.string.isRequired,
}