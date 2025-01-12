import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Navbar from "../components/navbar";
import Sidebar from "../components/side-bar";
import Footer from "../components/footer";
import feather from "feather-icons";
import { useRouter } from "../hooks/use-router";
import { logoutUser } from "../redux/reducers/authSlice";

const MainLayout = ({ children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    feather.replace();
  }, []);
  console.log(isAuthenticated);
  // Check if the user is authenticated and whether the user is an admin (user.is_staff)
  useEffect(() => {
    if (!isAuthenticated) {
      // toast.error("Unauthorized");
      router.push("/login");
      dispatch(logoutUser());
    } else if (isAuthenticated && !user.is_staff) {
      dispatch(logoutUser());
      toast.error("You are not an admin");
      router.push("/login");
    }
  }, [isAuthenticated, user.is_staff, router, dispatch]); // Dependencies include user authentication and user role

  return (
    <>
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
