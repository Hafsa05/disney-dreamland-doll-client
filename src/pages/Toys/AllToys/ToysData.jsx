import React from 'react';
import { Link } from 'react-router-dom';

const ToysData = ({ toy }) => {
	const { _id, sellerName, name, subcategory, price, availableQuantity } = toy || {};
	return (
		< tr className="hover" >
			<td>{sellerName}</td>
			<td>{name}</td>
			<td>{subcategory.value}</td>
			<td>$ {price}</td>
			<td>{availableQuantity}</td>
			<th>
				<Link to={`/toys-details/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
			</th>

		</tr >




	);
};

export default ToysData;