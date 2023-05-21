import React, { useEffect, useState } from 'react';
import ToysData from './ToysData';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
	const [toys, setToys] = useState([]);

	const [toySearch, setToySearch] = useState("");

	const [currentPage, setCurrentPage] = useState(1);
	const { totalToys } = useLoaderData();
	// const perPageToys = 3;
	const [perPageToys, setPerPageToys] = useState(5)
	console.log(totalToys);
	const numberOfPages = Math.ceil(totalToys / perPageToys);
	console.log(numberOfPages);

	const pageNumbers = [...Array(numberOfPages).keys()];

	const pageOption = [2, 5, 10];
	function handlePerPageToys(e) {
		setPerPageToys(parseInt(e.target.value));
		setCurrentPage(0);
	}
	// load all toys data
	// useEffect(() => {
	// 	fetch("http://localhost:5000/all-toys")
	// 		.then(res => res.json())
	// 		.then(result => {
	// 			setToys(result);
	// 		})
	// }, [])

	// load data according to pagination  
	useEffect(() => {
		async function fetchSomeData() {
			const someData = await fetch(`http://localhost:5000/all-toys?page=${currentPage}&limit=${perPageToys}`);
			const data = await someData.json();
			setToys(data);
		}
		fetchSomeData()
	}, [currentPage, perPageToys])


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

			{/* pagination part */}
			<div className='text-center' >
				<p><small>current page no: {currentPage + 1} & toys per page: {perPageToys}</small></p>
				{
					pageNumbers.map(pageNumber => <button className='btn btn-xs bg-purple-200 border-white w-10'
						key={pageNumber}
						onClick={() => setCurrentPage(pageNumber)}

					>
						{pageNumber + 1}
					</button>)

				}
				<select value={perPageToys} onChange={handlePerPageToys}>
					{
						pageOption.map(pOption => {
							<option key={pOption} value={pOption}>
								{pOption}
							</option>
						})
					}
				</select>
			</div>

		</div>




	);
};

export default AllToys;