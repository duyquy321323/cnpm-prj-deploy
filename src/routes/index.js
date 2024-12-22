import Layout1 from "../components/Layouts/Layout1";
import Layout2 from "../components/Layouts/Layout2";
import Layout3 from "../components/Layouts/Layout3";
import Layout4 from "../components/Layouts/Layout4";
import Layout5 from "../components/Layouts/Layout5";
import SettingLayout from "../components/Layouts/SettingLayout";
import AddFood from "../pages/AddFood";
import BookTable from "../pages/BookTable";
import CancelPayment from "../pages/CancelPayment";
import DashBoard from "../pages/DashBoard";
import DetailFood from "../pages/DetailFood";
import EditFood from "../pages/EditFood";
import ForgetPassword from "../pages/ForgetPassword";
import History from "../pages/History";
import Home from "../pages/Home";
import InformationToDelivery from "../pages/InformationToDelivery";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";
import Notification from "../pages/Notification";
import AddEmployee from "../pages/Setting/AddEmployee";
import ProductManager from "../pages/Setting/ProductManager";
import UpdateInformation from "../pages/Setting/UpdateInformation";
import SignUp from "../pages/SignUp";
import DetailOrder from "../pages/DetailOrder";
import SuccessPayment from "../pages/SuccessPayment";

const userData = localStorage.getItem("userData");

export const routes = [
  {
    path: "/cnpm-prj-deploy/",
    element: <Layout1 />,
    children: [
      {
        path: "/cnpm-prj-deploy/",
        element: <Home />,
      },
      {
        path: "/cnpm-prj-deploy/login",
        element: <Login title="Welcome Back .!" content="Skip the lag ?" />,
      },
      {
        path: "/cnpm-prj-deploy/sign-up",
        // element: <SignUp title="Roll the Carpet .!" content="Skip the lag ?" />,
        element: <SignUp />,
      },
      {
        path: "/cnpm-prj-deploy/forget-password",
        element: (
          <ForgetPassword  />
        ),
      },
    ],
  },
  {
    path: "/cnpm-prj-deploy/book-table",
    element: <BookTable />,
  },
  {
    path: "/cnpm-prj-deploy/",
    element: <Layout2 />,
    children: [
      {
        path: "/cnpm-prj-deploy/menu",
        element: <Menu />,
      },
      {
        path: "/cnpm-prj-deploy/detail-food/:slug",
        element: <DetailFood />,
      },
      {
        path: "/cnpm-prj-deploy/information-to-delivery",
        element: <InformationToDelivery />,
      },
    ],
  },
  {
    path: "/cnpm-prj-deploy/",
    element: <Layout3 />,
    children: [
      {
        path: "/cnpm-prj-deploy/dashboard",
        element: <DashBoard />,
      },
    ],
  },
  {
    path: "/cnpm-prj-deploy/",
    element: <Layout4 />,
    children: [
      {
        path: "/cnpm-prj-deploy/setting",
        element: <SettingLayout />,
        children: [
          {
            path: "/cnpm-prj-deploy/setting/update-information",
            element: <UpdateInformation />,
          },
          {
            path: "/cnpm-prj-deploy/setting/add-employee",
            element: <AddEmployee />,
          },
          {
            path: "/cnpm-prj-deploy/setting/product-manager",
            element: <ProductManager />,
          },
          {
            path: "/cnpm-prj-deploy/setting/product-manager/add-new-food",
            element: <AddFood />,
          },
          {
            path: "/cnpm-prj-deploy/setting/product-manager/edit-food/:slug",
            element: <EditFood />,
          },
        ],
      },
    ],
  },
  {
    path: "/cnpm-prj-deploy/",
    element: <Layout5 />,
    children: [
      {
        path: "/cnpm-prj-deploy/notification",
        element: <Notification />,
      },
      {
        path: '/cnpm-prj-deploy/detail-order/:id',
        element: <DetailOrder/>
      },
      {
        path: "/cnpm-prj-deploy/history",
        element: <History />,
      },
    ],
  },
  {
    path: '/cnpm-prj-deploy/success-payment',
    element: <SuccessPayment/>
  },
  {
    path: '/cnpm-prj-deploy/cancel-payment',
    element: <CancelPayment/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
];
