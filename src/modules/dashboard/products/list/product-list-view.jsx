import PageBreadcrumb from "../../../../components/page-breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../../../redux/reducers/productSlice";
import { Link } from "react-router-dom";
import RHFDataGrid from "../../../../components/data-grid";

const ProductListView = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search term
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // Update filteredProducts when products or searchTerm changes
  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [products, searchTerm]);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "70px",
    },
    { name: "Name", selector: (row) => row?.name, sortable: true },
    { name: "Category", selector: (row) => row?.category?.name },
    { name: "Inventory", selector: (row) => row?.inventory },
    { name: "Unit Price ($)", selector: (row) => row?.unit_price },
    {
      name: "Created At",
      selector: (row) => new Date(row.created_at).toLocaleDateString(),
    },
  ];

  return (
    <div className="page-content">
      <PageBreadcrumb title="Home" subtitle="Products" />

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="card-title mb-0">All&nbsp;Products</h6>

                <div className="w-100 gap-3  d-flex justify-content-end">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="form-control w-25 form-control-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Link
                    to="/products/new"
                    className="btn btn-dark btn-sm"
                    type="button"
                  >
                    Add New
                  </Link>
                </div>
              </div>
              <RHFDataGrid
                data={filteredProducts}
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

export default ProductListView;
