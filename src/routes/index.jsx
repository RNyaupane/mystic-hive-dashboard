import { Suspense, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/main-layout.jsx"));
const Dashboard = lazy(() => import("../pages/dashboard.jsx"));

const Login = lazy(() => import("../pages/auth/login.jsx"));

const Page404 = lazy(() => import("../components/page-404.jsx"));
const ProductListpage = lazy(() => import("../pages/products/list.jsx"));
const ProductCreatePage = lazy(() => import("../pages/products/create.jsx"));
const ProductEditPage = lazy(() => import("../pages/products/edit.jsx"));

export const productsRoutes = [
  {
    path: "/products",
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { element: <ProductListpage />, index: true },
      { path: "new", element: <ProductCreatePage /> },
      { path: "edit", element: <ProductEditPage /> },
    ],
  },
];

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
    ...productsRoutes,
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default AppRouter;
