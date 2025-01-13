const AnalyticsCard = ({ title, value, percentage, isPositive }) => {
  return (
    <div className="col-md-4 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline">
            <h6 className="card-title mb-0">{title}</h6>
            <div className="dropdown mb-2">
              <a
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  className="icon-lg text-secondary pb-3px"
                  data-feather="more-horizontal"
                ></i>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {["View", "Edit", "Delete", "Print", "Download"].map(
                  (action) => (
                    <a
                      className="dropdown-item d-flex align-items-center"
                      key={action}
                    >
                      <i data-feather="eye" className="icon-sm me-2"></i>{" "}
                      {action}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-12 col-xl-5">
              <h3 className="mb-2">{value}</h3>
              <div className="d-flex align-items-baseline">
                <p className={isPositive ? "text-success" : "text-danger"}>
                  <span>{percentage}%</span>
                  <i
                    data-feather={isPositive ? "arrow-up" : "arrow-down"}
                    className="icon-sm mb-1"
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
