import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../Pages/Login/Register/Register";
import Login from "../Pages/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";
import TermsCondition from "../Pages/Share/TermsCondition.jsx/TermsCondition";

const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
           
            {
                path: '/',
                element: <Navigate to='category/0'></Navigate>

            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <TermsCondition></TermsCondition>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://react-news-drsgon-server-project-hyfkowejm.vercel.app/categories/${params.id}`)
            }
        ]

    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://react-news-drsgon-server-project-hyfkowejm.vercel.app/news/${params.id}`)
            }
        ]
    }
])
export default router;