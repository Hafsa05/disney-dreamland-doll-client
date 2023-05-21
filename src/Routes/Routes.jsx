import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blogs from "../pages/Blogs/Blogs";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import AddToy from "../pages/Toys/AddToy/AddToy";
import AllToys from "../pages/Toys/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../pages/Toys/MyToys/MyToys";
import UpdateToyDetails from "../pages/Toys/MyToys/UpdateToyDetails";
import ToysDetails from "../pages/Toys/AllToys/ToysDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/registration',
				element: <Registration></Registration>
			},
			{
				path: '/blogs',
				element: <Blogs></Blogs>
			},
			{
				path: '/terms',
				element: <TermsConditions></TermsConditions>
			},
			{
				path: '/all-toys',
				element: <AllToys></AllToys>,
				loader: ()=> fetch('http://localhost:5000/total-toys')
			},
			{
				path: '/add-toy',
				element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
			},
			{
				path: '/my-toys',
				element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
			},
			{
				path: '/toys-details/:id',
				element: <PrivateRoutes><ToysDetails></ToysDetails></PrivateRoutes>,
				loader: ({ params }) => fetch(`http://localhost:5000/all-toys/${params.id}`)
			},
			{
				path: '/update-toys/:id',
				element: <PrivateRoutes><UpdateToyDetails></UpdateToyDetails></PrivateRoutes>,
				// loader: ({ params }) => fetch(`http://localhost:5000/update-toys/${params.id}`, {
				// 	method: 'PUT',
				// 	headers: { "Content-Type": "application/json" },

				// })
			},



		]
	},
]);

export default router;