import { useEffect } from "react";
import OrderListView from "../../modules/dashboard/orders/order-list-view";
import feather from "feather-icons";

const OrderListPage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div>
      <OrderListView />
    </div>
  );
};

export default OrderListPage;
