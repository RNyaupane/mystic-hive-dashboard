import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/reducers/authSlice";
import classes from "./navbar.module.css";
import { Icon } from "@iconify/react";
import ThemeToggle from "./theme-toggle";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  const handleSidebarToggle = (e) => {
    e.preventDefault();
    console.log("toggle");
    const body = document.body;
    body.classList.toggle("sidebar-open");
  };
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-mini-wrapper">
          <img
            src="/assets/images/logo-mini-dark.png"
            className="logo-mini logo-mini-light"
            alt="logo"
          />
          <img
            src="/assets/images/logo-mini-dark.png"
            className="logo-mini logo-mini-dark"
            alt="logo"
          />
        </div>

        <form className="search-form">
          <div className="input-group">
            <div className="input-group-text">
              <Icon icon={"fe:search"} />
            </div>
            <input
              type="text"
              className="form-control"
              id="navbarForm"
              placeholder="Search here..."
            />
          </div>
        </form>

        <ul className="navbar-nav">
          <ThemeToggle />

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="notificationDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Icon icon={"fe:bell"} />

              <div className="indicator">
                <div className="circle"></div>
              </div>
            </a>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="notificationDropdown"
            >
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p>1 New Notifications</p>
                <a className="text-secondary">Clear all</a>
              </div>
              <div className="p-1">
                <a className="dropdown-item d-flex align-items-center py-2">
                  <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <Icon icon={"fe:gift"} className="text-white icon-sm" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New Order Recieved From Jenish Nyaupane</p>
                    <p className="fs-12px text-secondary">30 min ago</p>
                  </div>
                </a>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <a>View all</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* <img
                className="w-30px h-30px ms-1 rounded-circle"
                src="/assets/images/faces/face1.jpg"
                alt="profile"
              /> */}
              <button
                className={classes.avatar_button}
                id="UserAvatarText"
                type="button"
                aria-label="Ducrot, Jean"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className={classes.avatar_text}>
                  {user?.first_name?.charAt(0).toUpperCase() || "A"}
                  {user?.last_name?.charAt(0).toUpperCase()}
                </span>
              </button>
            </a>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="profileDropdown"
            >
              <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                <div className="mb-3">
                  {/* <img
                    className="w-80px h-80px rounded-circle"
                    src="/assets/images/faces/face1.jpg"
                    alt=""
                  /> */}
                  <button
                    className={classes.avatar_button_large}
                    id="UserAvatarText"
                    type="button"
                    aria-label="Ducrot, Jean"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className={classes.avatar_text_large}>
                      {user?.first_name?.charAt(0).toUpperCase() || "A"}
                      {user?.last_name?.charAt(0).toUpperCase()}
                    </span>
                  </button>
                </div>
                <div className="text-center">
                  <p className="fs-16px fw-bolder">
                    {user?.first_name} {user?.last_name}
                  </p>
                  <p className="fs-12px text-secondary">{user?.email}</p>
                </div>
              </div>
              <ul className="list-unstyled p-1">
                <li className="dropdown-item py-2">
                  <a
                    href="pages/general/profile.html"
                    className="text-body ms-0"
                  >
                    <Icon icon={"fe:user"} className="me-2 icon-md" />

                    <span>Profile</span>
                  </a>
                </li>
                <li className="dropdown-item py-2">
                  <a className="text-body ms-0">
                    <Icon icon={"fe:edit"} className="me-2 icon-md" />

                    <span>Edit Profile</span>
                  </a>
                </li>

                <li className="dropdown-item py-2">
                  <Link to="/login" className="text-body ms-0" onClick={logout}>
                    <Icon icon={"fe:logout"} className="me-2 icon-md" />

                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <a href="#" className="sidebar-toggler" onClick={handleSidebarToggle}>
          <Icon icon={"fe:bar"} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
