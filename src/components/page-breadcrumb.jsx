const PageBreadcrumb = ({ title, subtitle }) => {
  return (
    <nav className="page-breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{title || "Home"}</a> /
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {subtitle || ""}
        </li>
      </ol>
    </nav>
  );
};

export default PageBreadcrumb;
