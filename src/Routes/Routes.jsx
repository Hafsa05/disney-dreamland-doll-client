import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blogs from "../pages/Blogs/Blogs";
import TermsConditions from "../pages/TermsConditions/TermsConditions";

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
				path:'/registration',
				element: <Registration></Registration>
			},
			{
				path: '/blogs',
				element: <Blogs></Blogs>
			},
			{
				path: '/terms',
				element: <TermsConditions></TermsConditions>
			}
		]
	},
]);

export default router;