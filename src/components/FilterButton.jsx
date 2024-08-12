import React, { useState } from 'react';

const FilterButton = ({ text, count, isActive, onClick }) => {
    return (
        <button
            type="button"
            className={`btn rounded-pill ${isActive ? 'btn-dark text-white' : 'btn-white text-dark border border-dark'}`}
            onClick={() => onClick(text)}
        >
            <span className='fs-5 fw-semibold'>{text}</span> <span className='fs-6 fw-semibold pb-2'>{count}</span>
        </button>
    );
};

export default FilterButton;
