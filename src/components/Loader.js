import React from 'react';
import { Card } from 'react-bootstrap';
import { ColorRing } from 'react-loader-spinner';

function Loading(props) {
    const { loaderVisible, msg } = props;

    return (
        <div style={{ display: 'block', textAlignLast: 'center' }}>
            <Card.Body className="loadingCard">
                <ColorRing
                    visible={loaderVisible}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
                <h6>{msg}</h6>
            </Card.Body>
        </div>
    );
};

export default Loading;