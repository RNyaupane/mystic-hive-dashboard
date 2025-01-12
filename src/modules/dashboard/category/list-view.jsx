import PageBreadcrumb from "../../../components/page-breadcrumb";
import DataTable from "datatables.net-react";
import DT from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../../redux/reducers/categorySlice";
import Spinner from "../../../components/spinner";
import { Link } from "react-router-dom";

const CategoryListView = () => {
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.categories);

  DataTable.use(DT);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const columns = [
    { title: "S.N" },
    { title: "Name" },
    { title: "Description" },
    { title: "Created At" },
  ];

  const data = categories.map((cat, index) => [
    index + 1,
    cat.name,
    cat.name,
    new Date(cat.created_at).toLocaleDateString(),
  ]);

  return (
    <div className="page-content">
      <PageBreadcrumb title="Home" subtitle="Category" />

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="card-title mb-0">Category List</h6>
                <Link
                  to="/category/new"
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
                      searchPlaceholder: "Search products...",
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

export default CategoryListView;
