import { Suspense, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/main-layout.jsx"));
const Dashboard = lazy(() => import("../pages/dashboard.jsx"));

const Login = lazy(() => import("../pages/auth/login.jsx"));

const Page404 = lazy(() => import("../components/page-404.jsx"));
const ProductListpage = lazy(() => import("../pages/products/list.jsx"));
const ProductCreatePage = lazy(() => import("../pages/products/create.jsx"));
const ProductEditPage = lazy(() => import("../pages/products/edit.jsx"));
const CategoryListPage = lazy(() => import("../pages/category/list.jsx"));
const CategoryCreatePage = lazy(() => import("../pages/category/create.jsx"));
const CategoryEditPage = lazy(() => import("../pages/category/edit.jsx"));
const OrderListPage = lazy(() => import("../pages/orders/list.jsx"));
const OrderCreatePage = lazy(() => import("../pages/orders/create.jsx"));
const CommingSoon = lazy(() => import("../components/comming-soon.jsx"));

const productsRoutes = [
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

const categoryRoutes = [
  {
    path: "/category",
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { element: <CategoryListPage />, index: true },
      { path: "new", element: <CategoryCreatePage /> },
      { path: "edit", element: <CategoryEditPage /> },
    ],
  },
];

const orderRoutes = [
  {
    path: "/orders",
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { element: <OrderListPage />, index: true },
      { path: "new", element: <OrderCreatePage /> },
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
    ...categoryRoutes,
    ...orderRoutes,
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/comming-soon",
      element: (
        <MainLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <CommingSoon />
          </Suspense>
        </MainLayout>
      ),
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default AppRouter;
