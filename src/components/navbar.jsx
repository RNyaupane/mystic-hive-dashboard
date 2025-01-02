import { Link } from "react-router-dom";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-mini-wrapper">
          <img
            src="/assets/images/logo-mini-light.png"
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
              <i data-feather="search"></i>
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

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="notificationDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="bell"></i>
              <div className="indicator">
                <div className="circle"></div>
              </div>
            </a>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="notificationDropdown"
            >
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p>6 New Notifications</p>
                <a className="text-secondary">Clear all</a>
              </div>
              <div className="p-1">
                <a className="dropdown-item d-flex align-items-center py-2">
                  <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i className="icon-sm text-white" data-feather="gift"></i>
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New Order Recieved</p>
                    <p className="fs-12px text-secondary">30 min ago</p>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center py-2">
                  <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i
                      className="icon-sm text-white"
                      data-feather="alert-circle"
                    ></i>
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Server Limit Reached!</p>
                    <p className="fs-12px text-secondary">1 hrs ago</p>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center py-2">
                  <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <img
                      className="w-30px h-30px rounded-circle"
                      src="/assets/images/faces/face6.jpg"
                      alt="userr"
                    />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New customer registered</p>
                    <p className="fs-12px text-secondary">2 sec ago</p>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center py-2">
                  <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i className="icon-sm text-white" data-feather="layers"></i>
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Apps are ready for update</p>
                    <p className="fs-12px text-secondary">5 hrs ago</p>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center py-2">
                  <div className="w-30px h-30px d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i
                      className="icon-sm text-white"
                      data-feather="download"
                    ></i>
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Download completed</p>
                    <p className="fs-12px text-secondary">6 hrs ago</p>
                  </div>
                </a>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <a>View all</a>
              </div>
            </div>
          </li> */}
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
              <img
                className="w-30px h-30px ms-1 rounded-circle"
                src="/assets/images/faces/face1.jpg"
                alt="profile"
              />
            </a>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="profileDropdown"
            >
              <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                <div className="mb-3">
                  <img
                    className="w-80px h-80px rounded-circle"
                    src="/assets/images/faces/face1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <p className="fs-16px fw-bolder">Amiah Burton</p>
                  <p className="fs-12px text-secondary">
                    amiahburton@gmail.com
                  </p>
                </div>
              </div>
              <ul className="list-unstyled p-1">
                <li className="dropdown-item py-2">
                  <a
                    href="pages/general/profile.html"
                    className="text-body ms-0"
                  >
                    <i className="me-2 icon-md" data-feather="user"></i>
                    <span>Profile</span>
                  </a>
                </li>
                <li className="dropdown-item py-2">
                  <a className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="edit"></i>
                    <span>Edit Profile</span>
                  </a>
                </li>

                <li className="dropdown-item py-2">
                  <Link to="/login" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="log-out"></i>
                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <a href="#" className="sidebar-toggler">
          <i data-feather="menu"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
