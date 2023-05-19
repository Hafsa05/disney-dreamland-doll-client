import React from 'react';

const ToysData = ({toy}) => {
	const [sellerName, name, subcategory, price, availableQuantity] = toy;
	return (
		<div>
			<tr>
				<th>1</th>
				<td>{sellerName}</td>
				<td>{name}</td>
				<td>{subcategory}</td>
				<td>{price}</td>
				<td>{availableQuantity}</td>
				<td><button>view details</button></td>
			</tr>
		</div>
	);
};

export default ToysData;