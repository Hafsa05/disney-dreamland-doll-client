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
		<div className='p-10 mx-auto'> 
			<p>Table length: {toys.length}</p>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Seller Name</th>
							<th>Toy Name </th>
							<th>Sub Category</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>View</th>
							
						</tr>
					</thead>
					<tbody>
						{
							toys.map(toy => <ToysData
								key={toy._id}
								toy={toy}
							>
							</ToysData>)
						}

					</tbody>


				</table>
			</div>
		</div>
	);
};

export default AllToys;