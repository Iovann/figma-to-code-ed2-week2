import React from 'react';

const SizeButton = ({ sizeChoice }) => {
  const isNumericSize = !isNaN(parseInt(sizeChoice));

  const sizeTab = {
    small: 'S',
    medium: 'M',
    large: 'L',
    xsmall: 'XS',
    xlarge: 'XL',
  };

  const mappedSize = isNumericSize ? sizeChoice : sizeTab[sizeChoice.toLowerCase()];
  const sizes = isNumericSize ? ['4', '5', '6', '7', '8'] : ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="d-flex gap-3 gap-sm-1 container">
      {sizes.map((size) => (
        <button
          key={size}
          className={`btn ${mappedSize === size ? 'btn-dark' : 'btn-light'} border border-1 border-black rounded-5 px-sm-4 px-3 fs-3 size fw-bold`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeButton;
