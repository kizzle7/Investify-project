import React, { useEffect } from 'react';

const Backdrop = ({ click, show }) => {

    return (
        <div className={`mybackdrop  ${show ? 'shown' : ''}`} onClick={click} ></div>
    )
}

export { Backdrop }