import { useEffect } from "react";
import feather from "feather-icons";
import OrderCreateView from "../../modules/dashboard/orders/order-create-view";

const OrderCreatePage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <OrderCreateView />
    </>
  );
};

export default OrderCreatePage;
