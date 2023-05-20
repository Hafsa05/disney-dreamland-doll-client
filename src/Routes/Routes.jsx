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
				element: <PrivateRoutes><Blogs></Blogs></PrivateRoutes>
			},
			{
				path: '/terms',
				element: <TermsConditions></TermsConditions>
			},
			{
				path: '/all-toys',
				element: <AllToys></AllToys>
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
				path:'/update-toy-details',
				element:<PrivateRoutes><UpdateToyDetails></UpdateToyDetails></PrivateRoutes>
			}

			
		]
	},
]);

export default router;