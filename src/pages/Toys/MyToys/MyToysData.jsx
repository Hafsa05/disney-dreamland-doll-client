import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateToyDetails from './UpdateToyDetails';

const MyToysData = ({ myToy, handleDelete }) => {
	const { _id, sellerName, name, subcategory, price, availableQuantity } = myToy || {};
	console.log(_id);

	
	// const [toys, setToys] = useState([]);
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
				<button className="btn btn-ghost btn-xs"><Link to='/update-toy-details'>Update Details</Link>  </button>
			</th>
			<th>
				<button className="btn btn-ghost btn-xs" onClick={() => handleDelete(_id)}>Delete Product</button>
			</th>

		</tr >




	);
};

export default MyToysData;