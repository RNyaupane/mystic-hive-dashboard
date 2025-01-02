const DashboardView = () => {
  return (
    <div className="page-content">
      <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
          <h4 className="mb-3 mb-md-0">Welcome to Dashboard</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-xl-12 stretch-card">
          <div className="row flex-grow-1">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h6 className="card-title mb-0">New Customers</h6>
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
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="eye" className="icon-sm me-2"></i>{" "}
                          <span className="">View</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="edit-2" className="icon-sm me-2"></i>{" "}
                          <span className="">Edit</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="trash" className="icon-sm me-2"></i>{" "}
                          <span className="">Delete</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i
                            data-feather="printer"
                            className="icon-sm me-2"
                          ></i>{" "}
                          <span className="">Print</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i
                            data-feather="download"
                            className="icon-sm me-2"
                          ></i>{" "}
                          <span className="">Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-12 col-xl-5">
                      <h3 className="mb-2">3,897</h3>
                      <div className="d-flex align-items-baseline">
                        <p className="text-success">
                          <span>+3.3%</span>
                          <i
                            data-feather="arrow-up"
                            className="icon-sm mb-1"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h6 className="card-title mb-0">New Orders</h6>
                    <div className="dropdown mb-2">
                      <a
                        type="button"
                        id="dropdownMenuButton1"
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
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="eye" className="icon-sm me-2"></i>{" "}
                          <span className="">View</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="edit-2" className="icon-sm me-2"></i>{" "}
                          <span className="">Edit</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="trash" className="icon-sm me-2"></i>{" "}
                          <span className="">Delete</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i
                            data-feather="printer"
                            className="icon-sm me-2"
                          ></i>{" "}
                          <span className="">Print</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i
                            data-feather="download"
                            className="icon-sm me-2"
                          ></i>{" "}
                          <span className="">Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-12 col-xl-5">
                      <h3 className="mb-2">35,084</h3>
                      <div className="d-flex align-items-baseline">
                        <p className="text-danger">
                          <span>-2.8%</span>
                          <i
                            data-feather="arrow-down"
                            className="icon-sm mb-1"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h6 className="card-title mb-0">Growth</h6>
                    <div className="dropdown mb-2">
                      <a
                        type="button"
                        id="dropdownMenuButton2"
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
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="eye" className="icon-sm me-2"></i>{" "}
                          <span className="">View</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="edit-2" className="icon-sm me-2"></i>{" "}
                          <span className="">Edit</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i data-feather="trash" className="icon-sm me-2"></i>{" "}
                          <span className="">Delete</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i
                            data-feather="printer"
                            className="icon-sm me-2"
                          ></i>{" "}
                          <span className="">Print</span>
                        </a>
                        <a className="dropdown-item d-flex align-items-center">
                          <i
                            data-feather="download"
                            className="icon-sm me-2"
                          ></i>{" "}
                          <span className="">Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-12 col-xl-5">
                      <h3 className="mb-2">89.87%</h3>
                      <div className="d-flex align-items-baseline">
                        <p className="text-success">
                          <span>+2.8%</span>
                          <i
                            data-feather="arrow-up"
                            className="icon-sm mb-1"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 col-xl-4 grid-margin grid-margin-xl-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <h6 className="card-title mb-0">Inbox</h6>
                <div className="dropdown mb-2">
                  <a
                    type="button"
                    id="dropdownMenuButton6"
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
                    aria-labelledby="dropdownMenuButton6"
                  >
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="eye" className="icon-sm me-2"></i>{" "}
                      <span className="">View</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="edit-2" className="icon-sm me-2"></i>{" "}
                      <span className="">Edit</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="trash" className="icon-sm me-2"></i>{" "}
                      <span className="">Delete</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="printer" className="icon-sm me-2"></i>{" "}
                      <span className="">Print</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="download" className="icon-sm me-2"></i>{" "}
                      <span className="">Download</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                {Array.from({ length: 5 }).map((item, index) => (
                  <a
                    key={index}
                    className={`d-flex align-items-center border-bottom ${
                      index === 0 ? "pb-3" : "py-3"
                    }`}
                  >
                    <div className="me-3">
                      <img
                        src="/assets/images/faces/face2.jpg"
                        className="rounded-circle w-35px"
                        alt="user"
                      />
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <h6 className="text-body mb-2">Leonardo Paynsae</h6>
                        <p className="text-secondary fs-12px">12.30 PM</p>
                      </div>
                      <p className="text-secondary fs-13px">
                        Hey! there Im available...
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-xl-8 stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <h6 className="card-title mb-0">Projects</h6>
                <div className="dropdown mb-2">
                  <a
                    type="button"
                    id="dropdownMenuButton7"
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
                    aria-labelledby="dropdownMenuButton7"
                  >
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="eye" className="icon-sm me-2"></i>{" "}
                      <span className="">View</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="edit-2" className="icon-sm me-2"></i>{" "}
                      <span className="">Edit</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="trash" className="icon-sm me-2"></i>{" "}
                      <span className="">Delete</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="printer" className="icon-sm me-2"></i>{" "}
                      <span className="">Print</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="download" className="icon-sm me-2"></i>{" "}
                      <span className="">Download</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th className="pt-0">#</th>
                      <th className="pt-0">Project Name</th>
                      <th className="pt-0">Start Date</th>
                      <th className="pt-0">Due Date</th>
                      <th className="pt-0">Status</th>
                      <th className="pt-0">Assign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 7 }).map((item, index) => (
                      <tr key={index}>
                        <td>1</td>
                        <td>NobleUI jQuery</td>
                        <td>01/01/2024</td>
                        <td>26/04/2024</td>
                        <td>
                          <span className="badge bg-primary">Released</span>{" "}
                          {/* bg-success bg-info bg-danger */}
                        </td>
                        <td>Leonardo Payne</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
