import React from 'react';

const ToysData = ({ toy }) => {
	const { sellerName, name, subcategory, price, availableQuantity } = toy;
	return (
		<div>
			{/* table row  */}
			<tr  className="hover">
				<td>{sellerName}</td>
				<td>{name}</td>
				<td>{subcategory.value}</td>
				<td>$ {price}</td>
				<td>{availableQuantity}</td>
				<th>
					<button className="btn btn-ghost btn-xs">View Details</button>
				</th>

			</tr>



		</div>
	);
};

export default ToysData;