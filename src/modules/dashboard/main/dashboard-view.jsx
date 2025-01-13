import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/reducers/productSlice";
import { getOrders } from "../../../redux/reducers/orderSlice";
import AnalyticsCard from "./analytics-card";
import RecentUser from "./recent-user";
import RecentOrder from "./recent-order";

const DashboardView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getOrders());
  }, [dispatch]);

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
            <AnalyticsCard
              title="New Customers"
              value="3,897"
              percentage="+3.3"
              isPositive={true}
            />
            <AnalyticsCard
              title="New Orders"
              value="35,084"
              percentage="-2.8"
              isPositive={false}
            />
            <AnalyticsCard
              title="Growth"
              value="89.87%"
              percentage="+2.8"
              isPositive={true}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <RecentOrder />
        <RecentUser />
      </div>
    </div>
  );
};

export default DashboardView;
