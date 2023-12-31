import React, { useContext, useEffect, useState } from 'react';
import MyToysData from './MyToysData';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {

	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);

	const [toySearch, setToySearch] = useState("");

	useEffect(() => {
		fetch(`https://disney-dreamland-doll-server.vercel.app/my-toys/${user?.email}`)
			.then(res => res.json())
			.then(result => {
				setMyToys(result);
			})
	}, [user])

	const handleToySearch = () => {
		fetch(`https://disney-dreamland-doll-server.vercel.app/toySearch/${toySearch}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMyToys(data);
			});
	}

	const handleDelete = (id) => {
		const proceed = confirm("Are you sure to delete it??");
		if (proceed) {
			fetch(`https://disney-dreamland-doll-server.vercel.app/my-toys/${id}`, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data.deletedCount > 0) {
						// alert("delete done!!!");
						Swal.fire(
							'Deleted!',
							'Your toy is deleted.',
							'success'
						);
						const remaining = myToys.filter(myToy => myToy._id !== id);
						setMyToys(remaining);
					}
				})
		}
	}

	return (
		<div className='p-10 mx-auto'>
			<p>Table length: {myToys.length}</p>

			<div className="text-center">
				<input type="text" onChange={(e) => setToySearch(e.target.value)} placeholder="Search by toy name" className="input input-bordered input-primary w-full max-w-xs" />

				<button className="btn btn-outline btn-primary m-5" onClick={handleToySearch}>Search</button>
			</div>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead >
						<tr>
							<th className="bg-purple-100">Seller Name</th>
							<th className="bg-purple-100">Toy Name </th>
							<th className="bg-purple-100">Sub Category</th>
							<th className="bg-purple-100">Price</th>
							<th className="bg-purple-100">Quantity</th>
							<th className="bg-purple-100">View</th>
							<th className="bg-purple-100">Update</th>
							<th className="bg-purple-100">Delete</th>

						</tr>
					</thead>
					<tbody>
						{
							myToys.map(myToy => <MyToysData
								key={myToy._id}
								myToy={myToy}
								handleDelete={handleDelete}
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