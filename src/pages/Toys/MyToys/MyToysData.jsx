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
				<Link to={`/toys-details/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
			</th>
			<th>
				{/* <button className="btn btn-ghost btn-xs"><Link to='/update-toys'>Update Details</Link>  </button> */}
				<Link to={`/update-toys/${_id}`}><button className="btn btn-ghost btn-xs">Update Details</button></Link>
			</th>
			<th>
				<button className="btn btn-ghost btn-xs" onClick={() => handleDelete(_id)}>Delete Product</button>
			</th>

		</tr >




	);
};

export default MyToysData;