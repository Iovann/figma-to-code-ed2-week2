import React from 'react';

function ItemCart({ item }) {
  return (
    <li className="list-group-item ps-0">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={item.image} className="rounded-3 img-fluid me-3" alt={item.name} width={72} height={72} />
          <div>
            <p className="fw-bold mb-0">{item.name}</p>
            <p className="mb-0">Color: {item.color} - Size: {item.size}</p>
          </div>
        </div>
        <span className="fw-bold">${item.price.toFixed(2)}</span>
      </div>
    </li>
  );
}

export default ItemCart;
