import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/reducers/authSlice";
import React from "react";

const Sidebar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const menuItems = [
    {
      category: "Main",
      items: [
        { label: "Dashboard", icon: "box", path: "/dashboard" },
        {
          label: "Products",
          icon: "mail",
          subMenu: [
            { label: "List", path: "/products" },
            { label: "Add new", path: "/products/new" },
          ],
        },
        {
          label: "Category",
          icon: "inbox",
          subMenu: [
            { label: "List", path: "/category" },
            { label: "Add new", path: "/category/new" },
          ],
        },
        { label: "Orders", icon: "archive", path: "/orders" },
      ],
    },
    {
      category: "Auth",
      items: [
        {
          label: "Logout",
          icon: "unlock",
          path: "/login",
          onClick: logout,
        },
      ],
    },
  ];

  const NavItem = ({ item }) => {
    if (item.subMenu) {
      return (
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href={`#${item.label.toLowerCase()}`}
            role="button"
            aria-expanded="false"
            aria-controls={item.label.toLowerCase()}
          >
            <i className="link-icon" data-feather={item.icon}></i>
            <span className="link-title">{item.label}</span>
            <i className="link-arrow" data-feather="chevron-down"></i>
          </a>
          <div
            className="collapse"
            data-bs-parent="#sidebarNav"
            id={item.label.toLowerCase()}
          >
            <ul className="nav sub-menu">
              {item.subMenu.map((subItem, index) => (
                <li className="nav-item" key={index}>
                  <Link to={subItem.path} className="nav-link">
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      );
    }
    return (
      <li className="nav-item">
        <Link
          to={item.path}
          className="nav-link"
          onClick={item.onClick ? item.onClick : null}
        >
          <i className="link-icon" data-feather={item.icon}></i>
          <span className="link-title">{item.label}</span>
        </Link>
      </li>
    );
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Link href="#" className="sidebar-brand">
          <img
            src="/assets/images/logo-mini-dark.png"
            className="logo-mini logo-mini-light"
            alt="logo"
            width={60}
          />
        </Link>
        <div className="sidebar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav" id="sidebarNav">
          {menuItems.map((menu, index) => (
            <React.Fragment key={index}>
              <li className="nav-item nav-category">{menu.category}</li>
              {menu.items.map((item, idx) => (
                <NavItem item={item} key={idx} />
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
