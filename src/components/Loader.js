import React from 'react';
import { Card } from 'react-bootstrap';
import { ColorRing } from 'react-loader-spinner';

function Loading(props) {
    const { loaderVisible } = props;

    return (
        <div className='loader'>
            <div>
                <h3>Uploading...</h3>
                <img src='images/loader.gif' />
            </div>
        </div>
    );
};

export default Loading;