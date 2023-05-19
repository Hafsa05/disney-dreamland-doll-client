import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

	const { signIn, googleSignIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const location = useLocation();
	console.log('login page location', location);
	const from = location.state?.from?.pathname || '/';


	const [errors, setErrors] = useState('');
	const [success, setSuccess] = useState('');

	const handleLogin = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log(name, email, password);

		signIn(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch(error => {
				setErrors(error.message);
				setSuccess('');
			})

	}

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(result => {
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch(error => console.error(error.message));
	}

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold text-purple-600">Please login now!!</h1>
						<p className="py-6">Discover a world of magic and nostalgia with <span className="font-bold text-purple-500">Disney Dreamland Doll.</span> Explore an artistically created selection of Disney dolls that bring cherished characters to life. From iconic princesses to legendary heroes, embark on a fantastic adventure and make eternal memories with these lovely companions.</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<form onSubmit={handleLogin}>
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
									<input className="btn btn-primary" type="submit" value="Login" />
								</div>
								<p className="text-center"><small>Or use any of these options</small></p>
								<button onClick={handleGoogleSignIn} className='w-full bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4 flex justify-center items-center gap-2'> <FaGoogle></FaGoogle> Login with Google </button> <br />
							</form>
							{/* <div className="form-control mt-4">
								<input className="btn btn-primary" type="submit" value="" />
							</div> */}
							<p className='my-5 text-center'>New to Disney Dreamland Doll? <br /><Link className='text-purple-500 font-bold' to='/registration'>Registration</Link> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;