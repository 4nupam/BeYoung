import React from 'react';

const Card = ({ product }) => {

  const truncatCard =(description,wordLimit)=>{
const words = description.split(" ");
if (words.length > wordLimit) {
  return words.slice(0, wordLimit).join(' ') + '...';
}
return description;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto mb-4 ">
      <img
        alt={product.title}
        className="w-full h-64 object-fit object-contain"
        src={product.image}
      />
      <div className="p-6">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.id} {product.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                fill={index < product.rating.rate ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            ))}
            <span className="text-gray-600 ml-3">{product.rating.count} Reviews</span>
          </span>
        </div>
        <p className="leading-relaxed mb-4">{truncatCard(product.description,20)}</p>
        <div className="flex items-center justify-around mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
          <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Add to Cart
          </button>
        <div className="flex justify-center">
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
