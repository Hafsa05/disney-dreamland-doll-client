import React, { useEffect, useState } from 'react';
import ToysData from './ToysData';

const AllToys = () => {
	const [toys, setToys] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/all-toys")
			.then(res => res.json())
			.then(result => {
				setToys(result);
			})
	})
	return (
		<div>
			<p>length: {toys.length}</p>

			<div className="overflow-x-auto">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th></th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub Category</th>
							<th>Price</th>
							<th>Quantity Login</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{
							toys.map(toy=> <ToysData
							key={toy._id}
							toy={toy}
							></ToysData>)
						}
						
						
					</tbody>

				</table>
			</div>
		</div>
	);
};

export default AllToys;