import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Link href="#" className="sidebar-brand">
          Noble<span>UI</span>
        </Link>
        <div className="sidebar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav" id="sidebarNav">
          <li className="nav-item nav-category">Main</li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#emails"
              role="button"
              aria-expanded="false"
              aria-controls="emails"
            >
              <i className="link-icon" data-feather="mail"></i>
              <span className="link-title">Products</span>
              <i className="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div className="collapse" data-bs-parent="#sidebarNav" id="emails">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products/new" className="nav-link">
                    Add new
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link">
              <i className="link-icon" data-feather="archive"></i>
              <span className="link-title">Orders</span>
            </Link>
          </li>

          <li className="nav-item nav-category">Auth</li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <i className="link-icon" data-feather="unlock"></i>
              <span className="link-title">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
