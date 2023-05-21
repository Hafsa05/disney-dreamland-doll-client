import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import { useLoaderData } from 'react-router-dom';
const UpdateToyDetails = () => {

	const toyDetails = useLoaderData();
	const { _id, image, name, price, rating, subcategory, sellerName, sellerEmail, availableQuantity, productDetails } = toyDetails;


	const { user } = useContext(AuthContext);
	const [selectedOption, setSelectedOption] = useState(null);

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		data.subcategory = selectedOption;

		fetch(`http://localhost:5000/update-toys${_id}`, {
			// method: "POST",
			method: "PUT",
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

	return (
		<div>
			<h2>Update toy details</h2>
			<div className='card card-body flex items-center justify-center max-w-xl shadow-xl bg-purple-50 '>
				<div className="text-center lg:text-left">
					<h1 className="text-3xl font-bold font-serif text-purple-600">Welcome seller, add your toy here!!</h1>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>

					<input className="p-6 m-2 rounded-xl " {...register("image", { required: true })} placeholder="Enter image url of the toy" defaultValue={image} type="text" />

					<input className="p-6 m-2 rounded-xl" value={name} {...register("name", { required: true })} placeholder="Enter name of the product" defaultValue={name} type="text" />

					<input className="p-6 m-2 rounded-xl" value={sellerName} {...register("sellerName", { required: true })} placeholder="Enter seller name" defaultValue={sellerName} type="text" />

					<input className="p-6 m-2 rounded-xl" value={user?.email} {...register("sellerEmail", { required: true })} placeholder="Enter seller email" defaultValue={sellerEmail} type="email" />

					<input className="p-6 m-2 rounded-xl" {...register("price", { required: true })} placeholder="Enter price" defaultValue={price} type="number" />

					<input className="p-6 m-2 rounded-xl" {...register("rating", { required: true })} placeholder="Enter rating" defaultValue={rating} type="text" />

					<input className="p-6 m-2 rounded-xl" {...register("availableQuantity", { required: true })} placeholder="Enter available quantity" defaultValue={availableQuantity} type="number" />

					<input className="p-6 m-2 rounded-xl" {...register("productDetails", { required: true })} placeholder="Enter product details" defaultValue={productDetails} type="text" />

					<CreatableSelect
						className="w-70"
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={categoryOptions}
					/>
					<br />
					<input className=" btn btn-outline btn-primary" type="submit" />

				</form>
			</div>
		</div>
	);
};

export default UpdateToyDetails;