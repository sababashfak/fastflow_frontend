import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBlog from "./components/Dashboard/Blog/DashBlog";
import NewBlog from "./components/Dashboard/Blog/NewBlog";
import UpdateBlog from "./components/Dashboard/Blog/UpdateBlog";
import DashBookingDetails from "./components/Dashboard/Booking/DashBookingDetails";
import DashBookings from "./components/Dashboard/Booking/DashBookings";
import Profile from "./components/Dashboard/Profile/Profile";
import DashNotFound from "./components/Dashboard/shared/DashNotFound";
import Layout from "./components/shared/Layout";
import { Toaster } from "./components/ui/sonner";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BookService from "./pages/BookService";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import UnderConstruction from "./pages/UnderConstruction";
import VerifyEmail from "./pages/VerifyEmail";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="about" element={<UnderConstruction />} />
            <Route path="services" element={<UnderConstruction />} />
            <Route path="book-service" element={<BookService />} />
            <Route path="projects" element={<UnderConstruction />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:blogId" element={<BlogDetails />} />
            <Route path="contact" element={<UnderConstruction />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="reset-password/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="privacy-policy" element={<UnderConstruction />} />
            <Route path="terms-of-use" element={<UnderConstruction />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route
            path="dashboard/admin"
            element={<Dashboard allowedRoles={["admin"]} />}
          >
            <Route path="" element={<Navigate to="bookings" replace />} />
            <Route path="bookings" element={<DashBookings />} />
            <Route
              path="bookings/:bookingId"
              element={<DashBookingDetails />}
            />
            <Route path="blog" element={<DashBlog />} />
            <Route path="blog/new" element={<NewBlog />} />
            <Route path="blog/edit/:blogId" element={<UpdateBlog />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<DashNotFound />} />
          </Route>
          <Route
            path="dashboard/user"
            element={<Dashboard allowedRoles={["user"]} />}
          >
            <Route path="" element={<Navigate to="bookings" replace />} />
            <Route path="bookings" element={<DashBookings />} />
            <Route
              path="bookings/:bookingId"
              element={<DashBookingDetails />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<DashNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
