import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {

	const { user, createUser } = useContext(AuthContext);
	const navigation = useNavigate();

	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');



	const handleRegistration = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value;
		console.log(name, email, password, photo);

		createUser(email, password)
			.then(result => {
				const createdUser = result.user;
				console.log(createdUser);
				navigation('/login');
				setError('');
				form.reset('');
				setSuccess('Welcome to our website!!..')
			})
			.catch(error => {
				// console.error(error.message);
				setError(error.message);
				setSuccess('');
			})
	}

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold text-purple-600">Please Registration now!!</h1>
						<p className="py-6">Discover a world of magic and nostalgia with <span className="font-bold text-purple-500">Disney Dreamland Doll.</span> Explore an artistically created selection of Disney dolls that bring cherished characters to life. From iconic princesses to legendary heroes, embark on a fantastic adventure and make eternal memories with these lovely companions.</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<form onSubmit={handleRegistration}>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input type="text" name="email" placeholder="Enter your email" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Photo url</span>
									</label>
									<input type="text" name="photo" placeholder="Enter photo url" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input type="password" placeholder="password" name="password" className="input input-bordered" required />
									<label className="label">
										<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
									</label>
								</div>
								<div className="form-control mt-6">
									<input className="btn btn-primary" type="submit" value="Registration" />
								</div>
							</form>
							{/* <div className="form-control mt-4">
								<input className="btn btn-primary" type="submit" value="" />
							</div> */}
							<p className='my-5 text-center'>Already have an account? <br /><Link className='text-purple-500 font-bold' to='/login'>Login</Link> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;