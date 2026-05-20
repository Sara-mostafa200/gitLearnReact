
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Layout';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Kids from './Components/Kids/Kids';
import LayoutCategories from './Components/Categories/layoutCategories';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      // Home
      {
        index: true,
        element: <Home />,
      },

      // Products
      {
        path: "products",
        element: <Products />,
      },

      // Brands
      {
        path: "brands",
        element: <Brands />,
      },

      // Cart
      {
        path: "cart",
        element: <Cart />,
      },

      // Checkout
      {
        path: "checkout",
        element: <CheckOut />,
      },

      // Login
      {
        path: "login",
        element: <Login />,
      },

      // Register
      {
        path: "register",
        element: <Register />,
      },

      // Categories + Nested Routing
      {
        path: "categories",
        element: <LayoutCategories />,

        children: [
          {
            path: "men",
            element: <Men />,
          },

          {
            path: "women",
            element: <Women />,
          },

          {
            path: "kids",
            element: <Kids />,
          }
        ],
      },
    ],
  },
]);

  return (
   <RouterProvider router={router} />
  )
}

export default App
