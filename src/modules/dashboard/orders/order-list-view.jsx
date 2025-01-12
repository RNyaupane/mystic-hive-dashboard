import PageBreadcrumb from "../../../components/page-breadcrumb";
import DataTable from "datatables.net-react";
import DT from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "../../../components/spinner";
import { Link } from "react-router-dom";
import { getOrders } from "../../../redux/reducers/orderSlice";

const OrderListView = () => {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.orders);
  console.log(orders);
  // Initialize DataTable
  DataTable.use(DT);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const columns = [
    { title: "Order ID" },
    { title: "User ID" },
    { title: "Product Details" },
    { title: "Quantity" },
    { title: "Total Price ($)" },
    { title: "Status" },
    { title: "Payment Status" },
    { title: "Created At" },
  ];

  const data = orders?.map((order) => [
    order.id,
    order.user,
    order.items
      .map(
        (item) =>
          `${item.product.name} (Unit Price: $${item.product.unit_price}, Quantity: ${item.quantity})`
      )
      .join("<br>"), // Combine product details into a single column
    order.items.reduce((acc, item) => acc + item.quantity, 0), // Total quantity
    order.items
      .reduce((acc, item) => acc + parseFloat(item.price), 0)
      .toFixed(2), // Total price
    order.status,
    order.payment_status,
    new Date(order.created_at).toLocaleDateString(),
  ]);

  return (
    <div className="page-content">
      <PageBreadcrumb title="Home" subtitle="Orders" />

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="card-title mb-0">All Orders</h6>
                <Link
                  to="/orders/new"
                  className="btn btn-dark btn-sm"
                  type="button"
                >
                  Add New
                </Link>
              </div>
              <div className="table-responsive products-table">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <DataTable
                    data={data}
                    columns={columns}
                    paging={true}
                    searching={true}
                    info={true}
                    className="table custom-datatable"
                    id="dataTableExample"
                    language={{
                      search: "Search",
                      searchPlaceholder: "Search orders...",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListView;
