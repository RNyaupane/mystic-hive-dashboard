import DataTable from "react-data-table-component";
import Spinner from "./spinner";

const RHFDataGrid = ({ data, columns, isLoading, search }) => {
  return (
    <div className="table-responsive products-table text-white">
      {isLoading ? (
        <Spinner />
      ) : (
        <DataTable
          data={data}
          columns={columns}
          pagination
          search={search}
          highlightOnHover
          theme="solarized"
          pointerOnHover
          noHeader
          customStyles={{
            rows: {
              style: {
                backgroundColor: "transparent",
              },
              highlightOnHoverStyle: {
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              },
            },
            headRow: {
              style: {
                backgroundColor: "transparent",
                fontWeight: "bold",
              },
            },
            table: {
              style: {
                minHeight: "300px",
                backgroundColor: "transparent",
              },
            },
            pagination: {
              style: {
                backgroundColor: "transparent",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default RHFDataGrid;
