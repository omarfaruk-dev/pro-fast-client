import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../pages/Dashboard/TrackParcel/TrackParcel";
import BeARider from "../pages/Dashboard/BeARider/BeARider";
import PendingRiders from "../pages/Dashboard/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/Dashboard/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import Forbidden from "../pages/Forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AssignRider from "../pages/Dashboard/AssignRider/AssignRider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'coverage',
        Component: Coverage,
      },
      {
        path: 'forbidden',
        Component: Forbidden,
      },
      {
        path: 'send-parcel',
        element: <PrivateRoute><SendParcel /></PrivateRoute>,
        loader: () => fetch("./serviceCenter.json")
      },
      {
        path: 'be-a-rider',
        element: <PrivateRoute><BeARider /></PrivateRoute>,
        loader: () => fetch("./serviceCenter.json").then(res => res.json())
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      // {
      //   path: 'forget-password',
      //   Component: Login,
      // }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: 'myparcels',
        Component: MyParcels,
      },
      {
        path: 'payment/:parcelId',
        Component: Payment,
      },
      {
        path: 'payment-history',
        Component: PaymentHistory,
      },
      {
        path: 'track',
        Component: TrackParcel,
      },
      {
        path: 'assign-rider',
        element: <AdminRoute><AssignRider /></AdminRoute>,
      },
      {
        path: 'pending-riders',
        element: <AdminRoute><PendingRiders /></AdminRoute>,
      },
      {
        path: 'active-riders',
        element: <AdminRoute><ActiveRiders /></AdminRoute>,
      },
      {
        path: 'make-admin',
        element: <AdminRoute><MakeAdmin /></AdminRoute>, 
      },
      {
        path: 'my-profile',
        Component: MyProfile,
      }
    ]
  }
]);
