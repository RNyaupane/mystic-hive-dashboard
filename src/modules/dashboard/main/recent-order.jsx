// import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import Spinner from "../../../components/spinner";
import { Link } from "react-router-dom";

const RecentOrder = () => {
  const { orders, isLoading } = useSelector((state) => state.orders);
  return (
    <div className="col-lg-5 col-xl-4 grid-margin grid-margin-xl-0 stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h6 className="card-title mb-0">Recent Orders</h6>
            <div className="dropdown mb-3">
              <Link
                to="/orders"
                className="d-flex align-items-center cursor-pointer"
              >
                View All
                {/* <Icon icon="fe:link-external" height={20} width={20} /> */}
              </Link>
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
            {isLoading ? (
              <Spinner />
            ) : (
              orders?.length > 0 &&
              orders?.map((item, index) => (
                <a
                  key={index}
                  className={`d-flex align-items-center border-bottom ${
                    index === 0 ? "pb-3" : "py-3"
                  }`}
                >
                  <div className="me-3">
                    <img
                      src={
                        item?.user?.image ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      className="rounded-circle w-35px"
                      alt="user"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between">
                      <h6 className="text-body mb-2">
                        {orders?.user?.name || "Kapil Bhandari"}
                      </h6>
                      <p className="text-secondary fs-12px">12.30 PM</p>
                    </div>
                    {/* <p className="text-secondary fs-13px">
                          Hey! there Im available...
                        </p> */}
                    <span className="badge bg-secondary">{item?.status}</span>{" "}
                    {/* bg-success bg-info bg-danger */}
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
