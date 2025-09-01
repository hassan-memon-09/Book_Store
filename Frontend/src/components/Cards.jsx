import React from 'react';

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200">
        <figure className="px-4 pt-4">
          <img src={item.image} alt={item.name} className="rounded-lg h-48 object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-outline badge-sm">{item.category}</div>
          </h2>
          <p className="text-sm text-base-content/70">{item.title}</p>
          <p className="text-sm text-base-content/60">By: {item.authors}</p>
          <div className="card-actions justify-between mt-2">
            <div className="badge badge-primary">${item.price}</div>
            <button className="btn btn-sm btn-accent">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;