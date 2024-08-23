import React from "react";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Account from "./components/Account";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
