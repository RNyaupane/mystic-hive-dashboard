const Page404 = () => {
  return (
    <div className="page-wrapper full-page">
      <div className="page-content d-flex align-items-center justify-content-center">
        <div className="row w-100 mx-0 auth-page">
          <div className="col-md-8 col-xl-6 mx-auto d-flex flex-column align-items-center">
            <img
              src="https://www.nobleui.com/html/template/assets/images/others/404.svg"
              className="img-fluid mb-2"
              alt="404"
            />
            <h1 className="fw-bolder mb-22 mt-2 fs-80px text-secondary">404</h1>
            <h4 className="mb-2">Page Not Found</h4>
            <h6 className="text-secondary mb-3 text-center">
              Oopps!! The page you were looking for doesn&apos;t exist.
            </h6>
            <a href="../../dashboard.html">Back to home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
