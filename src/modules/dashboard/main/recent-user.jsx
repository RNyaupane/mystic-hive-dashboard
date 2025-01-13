// import { Icon } from "@iconify/react";

const RecentUser = () => {
  return (
    <div className="col-lg-7 col-xl-8 stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h6 className="card-title mb-0">Recent User</h6>
            <div className="dropdown mb-2">
              <a className="d-flex align-items-center cursor-pointer">
                View All
                {/* <Icon icon="fe:link-external" height={20} width={20} /> */}
              </a>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th className="pt-0">#</th>
                  <th className="pt-0">Full Name</th>
                  <th className="pt-0">Email</th>
                  <th className="pt-0">Contact</th>
                  <th className="pt-0">Status</th>
                  <th className="pt-0">Ordered Item</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 7 }).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>Firstname Lastname</td>
                    <td>user123@gmail.com</td>
                    <td>985678...8</td>
                    <td>
                      <span className="badge bg-success">active</span>{" "}
                      {/* bg-success bg-info bg-danger */}
                    </td>
                    <td>5</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUser;
