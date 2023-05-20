import React from 'react';

const MyToysData = ({ myToy }) => {
	const { sellerName, name, subcategory, price, availableQuantity } = myToy || {};
	return (
		< tr className="hover" >
			<td>{sellerName}</td>
			<td>{name}</td>
			<td>{subcategory.value}</td>
			<td>$ {price}</td>
			<td>{availableQuantity}</td>
			<th>
				<button className="btn btn-ghost btn-xs">View Details</button>
			</th>
			<th>
				<button className="btn btn-ghost btn-xs">Update Details</button>
			</th>
			<th>
				<button className="btn btn-ghost btn-xs">Delete Product</button>
			</th>

		</tr >




	);
};

export default MyToysData;