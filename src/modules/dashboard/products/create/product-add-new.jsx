/* eslint-disable no-unused-vars */
import TextInputField from "../../../../components/form-element/text-input";
import PageBreadcrumb from "../../../../components/page-breadcrumb";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "../../../../components/form-element/select-input";
import CustomTextArea from "../../../../components/form-element/text-area";
import { productApi } from "../../../../redux/api-service/productApi";
import { toast } from "react-toastify";

const ProductCreateView = ({ currentProduct, editMode = false }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Product name is required")
      .max(100, "Product name must not exceed 100 characters"),
    description: yup
      .string()
      .required("Description is required")
      .max(1000, "Description must not exceed 1000 characters"),
    unit_price: yup
      .number()
      .required("Unit price is required")
      .positive("Unit price must be a positive number")
      .typeError("Unit price must be a valid number"),
    discount_price: yup
      .number()
      .nullable()
      .positive("Discount price must be a positive number")
      .typeError("Discount price must be a valid number"),
    inventory: yup
      .number()
      .required("Inventory is required")
      .integer("Inventory must be an integer")
      .min(0, "Inventory must be at least 0")
      .typeError("Inventory must be a valid number"),
    category: yup
      .number()
      .required("Category is required")
      .integer("Category must be a valid integer")
      .positive("Category must be a positive number")
      .typeError("Category must be a valid number"),
    status: yup
      .number()
      .required("Status is required")
      .oneOf([1, 2, 3], "Invalid status value"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      unit_price: "",
      discount_price: null,
      inventory: "",
      category: null,
      description: "",
      status: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await productApi.createProduct(data);
      if (res?.status === 200 || res?.status === 201) {
        toast.success(res?.message);
        reset();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message?.[0]);
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="page-content">
      <PageBreadcrumb title="Products" subtitle="Add New" />

      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title mb-4">Add New Product</h6>

              <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <TextInputField
                      name="name"
                      label="Name"
                      control={control}
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextInputField
                      name="unit_price"
                      label="Unit Price"
                      control={control}
                      type="number"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <TextInputField
                      name="discount_price"
                      label="Discount Price (Optional)"
                      control={control}
                      type="number"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextInputField
                      name="inventory"
                      label="Inventory"
                      control={control}
                      type="number"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <CustomSelect
                      name="category"
                      label="Category"
                      control={control}
                      option={[
                        { value: 1, label: "Category 1" },
                        { value: 2, label: "Category 2" },
                        { value: 3, label: "Category 3" },
                      ]}
                    />
                  </div>
                  <div className="col-md-6">
                    <CustomSelect
                      name="status"
                      label="Status"
                      control={control}
                      option={[
                        { value: 1, label: "Active" },
                        { value: 2, label: "Blocked" },
                        { value: 3, label: "Inactive" },
                      ]}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-12">
                    <CustomTextArea
                      name="description"
                      label="Product Description"
                      control={control}
                      placeholder="Enter product description..."
                    />
                  </div>
                </div>

                <button className="btn btn-primary" type="submit">
                  {isSubmitting && (
                    <span
                      className="spinner-border spinner-border-sm mx-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  {isSubmitting ? "Submitting" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreateView;
