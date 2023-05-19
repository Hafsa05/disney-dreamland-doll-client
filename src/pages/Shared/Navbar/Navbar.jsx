import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(error => console.log(error))
	}

	const navItems = <>
		<li><Link to='/'>Home</Link></li>
		<li><Link to='/blogs'>Blogs</Link></li>
		<li><Link to='/alltoys'>All Toys</Link></li>
		{
			user?.email ? <>
				<li><Link to='/mytoys'>My Toys</Link></li>
				<li><Link to='/addtoys'>Add Toys</Link></li>
				<li><button onClick={handleLogOut}>Logout</button></li>
			</>
				: <li><Link to='/login'>Login</Link></li>
		}

		{/* {user?.email ?
			<>
				<li><Link to='/bookings'>My Bookings</Link></li>
				<li><button onClick={handleLogOut}>Logout</button></li>
			</>

			: <li><Link to='/login'>Login</Link></li>} */}
	</>
	return (
		<div>
			<div className="navbar h-24 bg-purple-50 w-full">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{navItems}
						</ul>
					</div>
					<div className="flex ml-20 items-center" >
						<Link to="/"><img src={logo} alt="page logo" className='rounded-full w-20' /></Link>
						<div className="ml-5">
							<h2 className='text-xl font-bold font-serif text-purple-700'><Link to='/'>Disney Dreamland Doll</Link> </h2>
							<p><small className='text-purple-500'>Live Dream With Disney Magic</small> </p>
						</div>
					</div>

				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{navItems}
					</ul>
				</div>

			</div>
		</div>
	);
};

export default Navbar;