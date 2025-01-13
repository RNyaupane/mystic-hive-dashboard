import PageBreadcrumb from "../../../components/page-breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../../../redux/reducers/categorySlice";
import { Link } from "react-router-dom";
import RHFDataGrid from "../../../components/data-grid";

const CategoryListView = () => {
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.categories);
  const [searchTerm, setSearchTerm] = useState(""); // Add state for search term
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCategories(
      categories.filter(
        (category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          category.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [categories, searchTerm]);

  const columns = [
    { name: "S.N", selector: (row, index) => index + 1, width: "70px" },
    { name: "Name", selector: (row) => row.name },
    { name: "Description", selector: (row) => row.description },
    {
      name: "Created At",
      selector: (row) => new Date(row.created_at).toLocaleDateString(),
    },
  ];

  return (
    <div className="page-content">
      <PageBreadcrumb title="Home" subtitle="Category" />

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="card-title mb-0">Category&nbsp;List</h6>
                <div className="w-100 gap-3  d-flex justify-content-end">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="form-control w-25 form-control-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Link
                    to="/category/new"
                    className="btn btn-dark btn-sm"
                    type="button"
                  >
                    Add New
                  </Link>
                </div>
              </div>
              <RHFDataGrid
                data={filteredCategories} // Pass filtered data
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

export default CategoryListView;
