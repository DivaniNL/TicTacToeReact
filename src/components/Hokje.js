import React from 'react';

const Hokje = ({ value, onClick }) => (
    <button className='button' onClick={onClick}>
        {value}
    </button>
);

export default Hokje;