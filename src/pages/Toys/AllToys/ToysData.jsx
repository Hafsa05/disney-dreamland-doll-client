import React from 'react';

const ToysData = ({ toy }) => {
	const { sellerName, name, subcategory, price, availableQuantity } = toy || {};
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

		</tr >




	);
};

export default ToysData;