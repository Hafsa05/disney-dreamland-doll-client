import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import Swal from 'sweetalert2';

const AddToy = () => {

	const { user } = useContext(AuthContext);
	const [selectedOption, setSelectedOption] = useState(null);

	// from react hook form 
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		data.subcategory = selectedOption;

		fetch("http://localhost:5000/add-toy", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
			});

		console.log(data);
	};

	const categoryOptions = [
		{ value: "Disney Princess", label: "Disney Princess" },
		{ value: "Frozen Doll", label: "Frozen Doll" },
		{ value: "Animation Doll", label: "Animation Doll" },
		{ value: "Donald Doll", label: "Donald Doll" },

	];

	const handleClick = () => {
		Swal.fire(
			'Good job!!',
			'Toy data add done!',
			'success'
		  )
	}

	return (
		<div>
			<div className='card card-body flex items-center justify-center max-w-xl shadow-xl bg-purple-50 '>
				<div className="text-center lg:text-left">
					<h1 className="text-3xl font-bold font-serif text-purple-600">Welcome seller, add your toy here!!</h1>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>

					<input className="p-6 m-2 rounded-xl " {...register("image", { required: true })} placeholder="Enter image url of the toy" defaultValue="" type="text" />

					<input className="p-6 m-2 rounded-xl" {...register("name", { required: true })} placeholder="Enter name of the product" defaultValue="" type="text" />

					<input className="p-6 m-2 rounded-xl" value={user?.name} {...register("sellerName", { required: true })} placeholder="Enter seller name" type="text" />

					<input className="p-6 m-2 rounded-xl" value={user?.email} {...register("sellerEmail", { required: true })} placeholder="Enter seller email" type="email" />

					<input className="p-6 m-2 rounded-xl" {...register("price", { required: true })} placeholder="Enter price" type="number" />

					<input className="p-6 m-2 rounded-xl" {...register("rating", { required: true })} placeholder="Enter rating" type="text" />

					<input className="p-6 m-2 rounded-xl" {...register("availableQuantity", { required: true })} placeholder="Enter available quantity" type="number" />

					<input className="p-6 m-2 rounded-xl" {...register("productDetails", { required: true })} placeholder="Enter product details" type="text" />

					<CreatableSelect
						className="w-70"
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={categoryOptions}
					/>
					<br />
					<input onClick={handleClick} className=" btn btn-outline btn-primary" type="submit" />

				</form>
			</div>
		</div>
	);
};

export default AddToy;