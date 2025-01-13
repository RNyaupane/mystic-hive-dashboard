// OrderListView.js
import PageBreadcrumb from "../../../components/page-breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../../../redux/reducers/orderSlice";
import RHFDataGrid from "../../../components/data-grid";

const OrderListView = () => {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.orders);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  // Update filteredOrders when orders or searchTerm changes
  useEffect(() => {
    setFilteredOrders(
      orders.filter((order) => {
        const searchInItems = order.items.some((item) =>
          item.product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return (
          order.id.toString().includes(searchTerm.toLowerCase()) ||
          order.user.toString().includes(searchTerm.toLowerCase()) ||
          searchInItems
        );
      })
    );
  }, [orders, searchTerm]);

  const columns = [
    { name: "Order ID", selector: (row) => row.id, width: "100px" },
    { name: "User ID", selector: (row) => row.user, width: "100px" },
    {
      name: "Product Details",
      selector: (row) =>
        row.items
          .map(
            (item) =>
              `${item.product.name} (Unit Price: $${item.product.unit_price}, Quantity: ${item.quantity})`
          )
          .join(", "),
      width: "300px",
    },
    {
      name: "Quantity",
      selector: (row) =>
        row.items.reduce((acc, item) => acc + item.quantity, 0),
      width: "100px",
    },
    {
      name: "Total Price ($)",
      selector: (row) =>
        row.items
          .reduce((acc, item) => acc + parseFloat(item.price), 0)
          .toFixed(2),
      width: "120px",
    },
    { name: "Status", selector: (row) => row.status, width: "100px" },
    {
      name: "Payment Status",
      selector: (row) => row.payment_status,
      width: "100px",
    },
    {
      name: "Created At",
      selector: (row) => new Date(row.created_at).toLocaleDateString(),
      width: "100px",
    },
  ];

  return (
    <div className="page-content">
      <PageBreadcrumb title="Home" subtitle="Orders" />

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="card-title mb-0">All&nbsp;Orders</h6>
                <div className="w-100 gap-3  d-flex justify-content-end">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="form-control w-25 form-control-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Link
                    to="/orders/new"
                    className="btn btn-dark btn-sm"
                    type="button"
                  >
                    Add New
                  </Link>
                </div>
              </div>

              {/* Use ReusableDataTable component */}
              <RHFDataGrid
                data={filteredOrders} // Pass filtered data
                columns={columns}
                isLoading={isLoading}
                search
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListView;
