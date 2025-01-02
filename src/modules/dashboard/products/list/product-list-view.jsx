import PageBreadcrumb from "../../../../components/page-breadcrumb";
import DataTable from "datatables.net-react";
import DT from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css"; // Import CSS for DataTable

// Initialize DataTable

const ProductListView = () => {
  DataTable.use(DT);

  const columns = [
    { title: "Name" },
    { title: "Position" },
    { title: "Office" },
    { title: "Age" },
    { title: "Start date" },
    { title: "Salary" },
  ];

  const data = [
    [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "61",
      "2011/04/25",
      "$320,800",
    ],
    ["Garrett Winters", "Accountant", "Tokyo", "63", "2011/07/25", "$170,750"],
    [
      "Ashton Cox",
      "Junior Technical Author",
      "San Francisco",
      "66",
      "2009/01/12",
      "$86,000",
    ],
    [
      "Cedric Kelly",
      "Senior Javascript Developer",
      "Edinburgh",
      "22",
      "2012/03/29",
      "$433,060",
    ],
    ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Teacher", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Teacher", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Teacher", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
    ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
    [
      "Brielle Williamson",
      "Integration Specialist",
      "New York",
      "61",
      "2012/12/02",
      "$372,000",
    ],
    [
      "Herrod Chandler",
      "Sales Assistant",
      "San Francisco",
      "59",
      "2012/08/06",
      "$137,500",
    ],
    [
      "Rhona Davidson",
      "Integration Specialist",
      "Tokyo",
      "55",
      "2010/10/14",
      "$327,900",
    ],
  ];

  return (
    <div className="page-content">
      <PageBreadcrumb title="Home" subtitle="Products" />

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Product List</h6>
              <div className="table-responsive products-table">
                <DataTable
                  data={data} // Data for the table
                  columns={columns} // Columns with titles
                  paging={true} // Enable pagination
                  searching={true} // Enable searching
                  info={true} // Show table information
                  className="table" // Bootstrap classes
                  id="dataTableExample"
                  language={{
                    search: "Hello",
                    searchPlaceholder: "Search products...",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
