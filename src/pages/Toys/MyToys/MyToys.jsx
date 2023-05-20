import React, { useContext, useEffect, useState } from 'react';
import MyToysData from './MyToysData';
import { AuthContext } from '../../../providers/AuthProvider';

const MyToys = () => {

	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);

	const [toySearch, setToySearch] = useState("");
	const [toyName, setToyName] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/my-toys/${user?.email}`)
			.then(res => res.json())
			.then(result => {
				setMyToys(result);
			})
	}, [user])

	// const handleToySearch = () => {
	// 	fetch(`http://localhost:5000/getJobsByText/${search}`)
	// 	  .then((res) => res.json())
	// 	  .then((data) => {
	// 		console.log(data);
	// 		setToyName(data);
	// 	  });
	//   };

	return (
		<div className='p-10 mx-auto'>
			<p>Table length: {myToys.length}</p>

			{/* <div className="search-box p-2 text-center">
				<input
					onChange={(e) => setToySearch(e.target.value)}
					type="text"
					className="p-1"
				/>{" "}
				<button onClick={handleToySearch}>Search</button>
			</div> */}

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead >
						<tr>
							<th>Seller Name</th>
							<th>Toy Name </th>
							<th>Sub Category</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>View</th>
							<th>Update</th>
							<th>Delete</th>

						</tr>
					</thead>
					<tbody>
						{
							myToys.map(myToy => <MyToysData
								key={myToy._id}
								myToy={myToy}
							>
							</MyToysData>)
						}

					</tbody>


				</table>
			</div>
		</div>
	);
};

export default MyToys;