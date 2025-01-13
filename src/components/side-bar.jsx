import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/reducers/authSlice";
import React from "react";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  const menuItems = [
    {
      category: "Main",
      items: [
        { label: "Dashboard", icon: "fe:table", path: "/dashboard" },
        {
          label: "Users",
          icon: "fe:users",
          subMenu: [
            { label: "List", path: "/comming-soon" },
            { label: "Add new", path: "/comming-soon" },
          ],
        },
        {
          label: "Products",
          icon: "fe:mail",
          subMenu: [
            { label: "List", path: "/products" },
            { label: "Add new", path: "/products/new" },
          ],
        },
        {
          label: "Category",
          icon: "fe:layer",
          subMenu: [
            { label: "List", path: "/category" },
            { label: "Add new", path: "/category/new" },
          ],
        },
        { label: "Orders", icon: "fe:add-cart", path: "/orders" },
        { label: "Inventory", icon: "fe:credit-card", path: "/comming-soon" },
      ],
    },
    {
      category: "Auth",
      items: [
        {
          label: "Logout",
          icon: "fe:unlock",
          path: "/login",
          onClick: logout,
        },
      ],
    },
  ];

  const handleSidebarToggle = (e) => {
    e.preventDefault();
    const body = document.body;
    if (window.innerWidth > 900) {
      body.classList.toggle("sidebar-folded");
      body.classList.remove("sidebar-open");
    } else {
      body.classList.toggle("sidebar-open");
      body.classList.remove("sidebar-folded");
    }
  };

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
            <Icon icon={item.icon} className="link-icon" />
            <span className="link-title">{item.label}</span>
            <Icon icon="fe:arrow-down" className="link-arrow" />
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
          <Icon icon={item.icon} className="link-icon" />
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
        <div className="sidebar-toggler" onClick={handleSidebarToggle}>
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
