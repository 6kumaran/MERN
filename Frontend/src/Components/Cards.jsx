import React from 'react';

function Cards({item}) {
  return(<>
  <div className='mt-4 my-4 p-3'>
  <div className="card w-90 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img className='h-80 w-80'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Fashion</div>
      <div className="px-2 py-1 border-[2px black] cursor-pointer rounded-full hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
  </div>
  </>)
}

export default Cards;