import React, { useEffect, useState } from 'react';
import ToysData from './ToysData';

const AllToys = () => {
	const [toys, setToys] = useState([]);

	const [toySearch, setToySearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:5000/all-toys")
			.then(res => res.json())
			.then(result => {
				setToys(result);
			})
	}, [])

	const handleToySearch = () => {
		fetch(`http://localhost:5000/toySearch/${toySearch}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setToys(data);
			});
	}

	return (
		<div className='p-10 mx-auto'>
			<p>Table length: {toys.length}</p>

			<div className="text-center">
				<input type="text" onChange={(e) => setToySearch(e.target.value)} placeholder="Search by toy name" className="input input-bordered input-primary w-full max-w-xs" />

				<button className="btn btn-outline btn-primary m-5" onClick={handleToySearch}>Search</button>
			</div>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th className="bg-purple-100">Seller Name</th>
							<th className="bg-purple-100">Toy Name </th>
							<th className="bg-purple-100">Sub Category</th>
							<th className="bg-purple-100">Price</th>
							<th className="bg-purple-100">Quantity</th>
							<th className="bg-purple-100">View</th>

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