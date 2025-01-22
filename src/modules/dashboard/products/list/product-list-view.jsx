import PageBreadcrumb from "../../../../components/page-breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../../../redux/reducers/productSlice";
import { Link } from "react-router-dom";
import RHFDataGrid from "../../../../components/data-grid";
import { Icon } from "@iconify/react";
import ImageUpload from "../../../../components/form-element/custom-img-upload";
import { productApi } from "../../../../redux/api-service/productApi";
import { toast } from "react-toastify";

const ProductListView = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleAddAction = (row) => {
    setSelectedProduct(row);
    setShowModal(true);
  };
  const [uploadedImages, setUploadedImages] = useState([]);
  const handleCloseModal = () => {
    setShowModal(false);
    setUploadedImages([]);
  };

  const handleFilesUpload = (files) => {
    setUploadedImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveChanges = async () => {
    if (uploadedImages.length === 0) {
      alert("No images to upload!");
      return;
    }

    const formData = new FormData();
    uploadedImages.forEach((file, index) => {
      formData.append("image", file); // File
      formData.append("is_primary", index === 0 ? "True" : "False"); // First image as primary
      formData.append("alt_text", file.name); // Image name as alt text
    });

    try {
      const response = await productApi.uploadImage(
        formData,
        selectedProduct?.id
      );
      console.log(response);
      if (response.status === 200) {
        toast.success(response?.message);
        handleCloseModal();
      } else {
        console.error("Upload failed:", response.message);
        toast.error("Failed to upload images. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while uploading images.");
    }
  };

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
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-xs btn-light"
          onClick={() => handleAddAction(row)}
        >
          <Icon icon="mdi:plus" className="me-1" />
          Add&nbsp;Img
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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

                <div className="w-100 gap-3 d-flex justify-content-end">
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
      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="w-100">
                  <h5 className="modal-title text-center mb-1">
                    Upload Images
                  </h5>
                  {/* <p>
                    <b>Product Name :</b> {selectedProduct?.name}
                  </p> */}
                </div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <ImageUpload onFilesUpload={handleFilesUpload} />
                {uploadedImages.length > 0 && (
                  <div className="mt-3">
                    <h6 className="pb-3">Preview:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {uploadedImages.map((file, index) => (
                        <div
                          key={index}
                          className="position-relative text-center"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview-${index}`}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                              borderRadius: "5px",
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            style={{
                              position: "absolute",
                              top: "-10px",
                              right: "-10px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            <Icon
                              icon="mdi:close-circle"
                              style={{ fontSize: "20px", color: "red" }}
                            />
                          </button>
                          <p
                            style={{
                              fontSize: "10px",
                              wordBreak: "break-word",
                              marginTop: "5px",
                              maxWidth: "100px",
                            }}
                          >
                            {file.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListView;
