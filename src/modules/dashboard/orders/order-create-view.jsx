import PageBreadcrumb from "../../../components/page-breadcrumb";

const OrderCreateView = () => {
  return (
    <div className="page-content">
      <PageBreadcrumb title="Orders" subtitle="Create" />

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="card-title mb-0">Order Create View</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCreateView;
