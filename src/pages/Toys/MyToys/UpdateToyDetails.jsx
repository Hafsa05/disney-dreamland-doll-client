import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import { useLoaderData } from 'react-router-dom';
const UpdateToyDetails = () => {

	const { user } = useContext(AuthContext);
	// const toyDetails = ;
	// const { _id, image, name, price, rating, subcategory, sellerName, sellerEmail, availableQuantity, productDetails } = toyDetails;
	// console.log(_id);

	const [selectedOption, setSelectedOption] = useState(null);

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		data.subcategory = selectedOption;

		fetch(`https://disney-dreamland-doll-server.vercel.app/update-toys${user._id}`, {
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
			<div className='card card-body flex items-center justify-center max-w-xl shadow-xl bg-purple-50 '>
				<div className="text-center lg:text-left">
					<h1 className="text-3xl font-bold font-serif text-purple-600">Welcome seller, update toy details here!!</h1>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>

					<input className="p-6 m-2 rounded-xl " {...register("image", { required: true })} placeholder="Enter image url of the toy" defaultValue={user.image} type="text" />

					<input className="p-6 m-2 rounded-xl" value={user.name} {...register("name", { required: true })} placeholder="Enter name of the product" defaultValue={user.name} type="text" />

					<input className="p-6 m-2 rounded-xl" value={user.sellerName} {...register("sellerName", { required: true })} placeholder="Enter seller name" defaultValue={user.sellerName} type="text" />

					<input className="p-6 m-2 rounded-xl" value={user?.email} {...register("sellerEmail", { required: true })} placeholder="Enter seller email" defaultValue={user.sellerEmail} type="email" />

					<input className="p-6 m-2 rounded-xl" {...register("price", { required: true })} placeholder="Enter price" defaultValue={user.price} type="number" />

					<input className="p-6 m-2 rounded-xl" {...register("rating", { required: true })} placeholder="Enter rating" defaultValue={user.rating} type="text" />

					<input className="p-6 m-2 rounded-xl" {...register("availableQuantity", { required: true })} placeholder="Enter available quantity" defaultValue={user.availableQuantity} type="number" />

					<input className="p-6 m-2 rounded-xl" {...register("productDetails", { required: true })} placeholder="Enter product details" defaultValue={user.productDetails} type="text" />

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