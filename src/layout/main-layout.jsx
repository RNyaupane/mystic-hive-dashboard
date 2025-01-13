import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Navbar from "../components/navbar";
import Sidebar from "../components/side-bar";
import Footer from "../components/footer";
import { useRouter } from "../hooks/use-router";
import { logoutUser } from "../redux/reducers/authSlice";

const MainLayout = ({ children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      dispatch(logoutUser());
    } else if (isAuthenticated && !user.is_staff) {
      dispatch(logoutUser());
      toast.error("You are not an admin");
      router.push("/login");
    }
  }, [isAuthenticated, user.is_staff, router, dispatch]);

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
