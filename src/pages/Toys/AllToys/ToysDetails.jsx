import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
	const toy = useLoaderData();
	const { image, name, price, rating, subcategory, sellerName, availableQuantity, productDetails } = toy;
	return (
		<div>
			<div>

				<div className="card w-full bg-base-100 shadow-xl">
					<figure className="px-10 pt-10">
						<img src={image} />
					</figure>
					<div className="card-body">
						<h2 className="text-4xl font-bold text-center">{name}</h2>
						<p className='text-2xl text-start font-semibold'>Price: {price} Tk.</p>
						<p className='text-2xl text-start font-semibold'>Subcategory: {subcategory.value}</p>
						<p className='text-2xl text-start font-semibold'>Seller Name: {sellerName}</p>
						<p className='text-2xl text-start font-semibold'>Available Quantity: {availableQuantity}</p>
						<p className='text-2xl text-start font-semibold'>Product Details: {productDetails}</p>

						<p className='text-2xl text-start font-semibold'>Rating: {rating} <FaStar></FaStar> </p>

					</div>
				</div>
			</div>

		</div>
	);
};

export default ToysDetails;