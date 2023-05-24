import React from 'react';
import Button from 'react-bootstrap/Button';

const UploadLink = () => {

    function sendToWeb() {

        // let webUrl = "https://fcinvest.faircent.com?token=34535434534tgdgfdfgdfgdfd"
        let webUrl = "https://qclend5.faircent.com/ekys/?token=34535434534tgdgfdfgdfgdfd"
        window.open(webUrl, '_blank')
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '9rem' }}>
            <Button onClick={sendToWeb}>Send</Button>
        </div>
    );
};

export default UploadLink;