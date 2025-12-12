// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AuthLayout from "../layout/AuthLayout";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import ProtectedRoute from "../component/ProtectedRoute";
// import HomeLayout from "../layout/HomeLayout";
// import Home from "../pages/common/Home";
// import ListFood from "../pages/food/ListFood";
// import AdminRoute from "../component/AdminRoute";
// import CreateFood from "../pages/food/CreateFood";
// import EditFood from "../pages/food/EditFood";
// import Order from "../pages/user/Order";
// import Cart from "../pages/user/Cart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AuthLayout />,
//     children: [
//       { index: true, element: <Login /> },
//       { path: "register", element: <Register /> },
//     ],
//   },

//   {
//     path: "/home",
//     element: (
//       <ProtectedRoute>
//         <HomeLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "food",
//         element: <ListFood />,
//       },
//       {
//         path: "food/create",
//         element: (
//           <AdminRoute>
//             <CreateFood />
//           </AdminRoute>
//         ),
//       },
//       {
//         path: "food/edit/:id",
//         element: (
//           <AdminRoute>
//             <EditFood />
//           </AdminRoute>
//         ),
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       {
//         path: "order",
//         element: <Order />,
//       },
//     ],
//   },
// ]);

// export default function AppRouter() {
//   return <RouterProvider router={router} />;
// }

//===================================================================================================================

// lazy loading

import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy Layouts
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const HomeLayout = lazy(() => import("../layout/HomeLayout"));

// Lazy Auth Pages
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));

// Lazy Common Pages
const Home = lazy(() => import("../pages/common/Home"));

// Lazy Food Pages
const ListFood = lazy(() => import("../pages/food/ListFood"));
const CreateFood = lazy(() => import("../pages/food/CreateFood"));
const EditFood = lazy(() => import("../pages/food/EditFood"));

// Lazy User Pages
const Cart = lazy(() => import("../pages/user/Cart"));
const Order = lazy(() => import("../pages/user/Order"));

// Non-lazy (essential small components)
import ProtectedRoute from "../component/ProtectedRoute";
import AdminRoute from "../component/AdminRoute";
import ListCategory from "../pages/category/ListCategory";
import CreateCategory from "../pages/category/CreateCategory";
import EditCategory from "../pages/category/EditCategory";
import FoodByCategory from "../pages/food/FoodByCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<h2>Loading...</h2>}>
          <HomeLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "food",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <ListFood />
          </Suspense>
        ),
      },
      {
        path: "food/create",
        element: (
          <AdminRoute>
            <Suspense fallback={<h2>Loading...</h2>}>
              <CreateFood />
            </Suspense>
          </AdminRoute>
        ),
      },
      {
        path: "food/edit/:id",
        element: (
          <AdminRoute>
            <Suspense fallback={<h2>Loading...</h2>}>
              <EditFood />
            </Suspense>
          </AdminRoute>
        ),
      },
      {
        path: "category",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <ListCategory />
          </Suspense>
        ),
      },
      {
        path: "category/create",
        element: (
          <AdminRoute>
            <Suspense fallback={<h2>Loading...</h2>}>
              <CreateCategory />
            </Suspense>
          </AdminRoute>
        ),
      },
      {
        path: "category/edit/:id",
        element: (
          <AdminRoute>
            <Suspense fallback={<h2>Loading...</h2>}>
              <EditCategory />
            </Suspense>
          </AdminRoute>
        ),
      },
      {
        path: "/home/category/:id/foods",
        element: <FoodByCategory />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "order",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Order />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
