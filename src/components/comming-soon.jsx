import PageBreadcrumb from "./page-breadcrumb";

const CommingSoon = () => {
  return (
    <div className="page-content">
      <PageBreadcrumb title="Home" subtitle="Comming soon" />

      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div
                className="container d-flex align-items-center justify-content-center"
                style={{ height: "300px", width: "100%" }}
              >
                <h6 className="card-title mb-4">Comming Soon ...</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
