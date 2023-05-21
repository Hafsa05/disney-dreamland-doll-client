import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';



const ToysDetails = () => {
	const toy = useLoaderData();
	const { image, name, price, rating, subcategory, sellerName, availableQuantity, productDetails } = toy;
	return (
		<div>
			<div>

				<div className="card w-full bg-purple-100 shadow-xl">
					<figure className="px-10 pt-10">
						<img src={image} className='object-scale-down h-50 w-96 ' />
					</figure>
					<div className="card-body">
						<h2 className="text-4xl font-bold text-center">{name}</h2>
						<p className='text-2xl text-start font-semibold'>Price: {price} Tk.</p>
						<p className='text-2xl text-start font-semibold'>Subcategory: {subcategory.value}</p>
						<p className='text-2xl text-start font-semibold'>Seller Name: {sellerName}</p>
						<p className='text-2xl text-start font-semibold'>Available Quantity: {availableQuantity}</p>
						<p className='text-2xl text-start font-semibold'>Product Details: {productDetails}</p>

						<p className='text-2xl text-start font-semibold'>Rating: {rating} </p>
						<Rating
							placeholderRating={rating}
							readonly
							emptySymbol={<FaRegStar></FaRegStar>}
							placeholderSymbol={<FaStar className='text-purple-400 '></FaStar>}
							fullSymbol={<FaStar></FaStar>}
						></Rating>

					</div>
				</div>
			</div>

		</div>
	);
};

export default ToysDetails;