import { useEffect } from "react";
import DashboardView from "../modules/dashboard/main/dashboard-view";
import feather from "feather-icons";

const Dashboard = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <DashboardView />
    </>
  );
};

export default Dashboard;
