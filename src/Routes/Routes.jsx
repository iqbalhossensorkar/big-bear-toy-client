import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import { Helmet } from "react-helmet";
import ToyDetails from "../Pages/Componens/ShopByCategory/ToyDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: (
          <>
            <Helmet>
              <title>Big Bear</title>
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: '/addToy',
        element: (
          <PrivateRoute>
            <Helmet>
              <title>Big Bear | Add Toy</title>
            </Helmet>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: '/allToys',
        element: (
          <>
            <Helmet>
              <title>Big Bear | All Toys</title>
            </Helmet>
            <AllToys />
          </>
        ),
        loader: () => fetch('http://localhost:5000/allToys')
      },
      {
        path: '/toyDetails/:id',
        element: (
          <>
            <PrivateRoute>
              <Helmet>
                <title>Big Bear | Toy Details</title>
              </Helmet>
              <ToyDetails />
            </PrivateRoute>
          </>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toyDetail/${params.id}`)
      },
      {
        path: '/myToys',
        element: (
          <PrivateRoute>
            <Helmet>
              <title>Big Bear | My Toys</title>
            </Helmet>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        element: (
          <>
            <Helmet>
              <title>Big Bear | Blog</title>
            </Helmet>
            <Blog />
          </>
        ),

      },
      {
        path: '/login',
        element: (
          <>
            <Helmet>
              <title>Big Bear | Login</title>
            </Helmet>
            <Login />
          </>
        ),
      },
      {
        path: '/register',
        element: (
          <>
            <Helmet>
              <title>Big Bear | Register</title>
            </Helmet>
            <Register />
          </>
        ),

      }
    ]
  },
]);

export default router;