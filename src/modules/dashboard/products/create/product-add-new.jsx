import TextInputField from "../../../../components/form-element/text-input";
import PageBreadcrumb from "../../../../components/page-breadcrumb";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "../../../../components/form-element/select-input";
import CustomTextArea from "../../../../components/form-element/text-area";

/* eslint-disable no-unused-vars */
const ProductCreateView = ({ currentProduct, editMode = false }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be greater than zero")
      .required("Price is required"),
    stock: Yup.number()
      .typeError("Stock must be a number")
      .integer("Stock must be an integer")
      .min(0, "Stock cannot be negative")
      .required("Stock is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
    weight: Yup.number()
      .typeError("Weight must be a number")
      .positive("Weight must be greater than zero")
      .required("Weight is required"),
    image: Yup.mixed().required("Product image is required"),
    tags: Yup.array().of(Yup.string()).required("At least one tag is required"),
    sku: Yup.string().required("SKU is required"),
    status: Yup.string().required("Status is required"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      category: null,
      description: "",
      weight: "",
      image: "",
      tags: "",
      sku: "",
      status: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="page-content">
      <PageBreadcrumb title="Products" subtitle="add new" />

      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title mb-4">Add New Product</h6>

              <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col">
                    <TextInputField
                      name="name"
                      label="Name"
                      control={control}
                      rules={{ required: "This field is required" }}
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextInputField
                      name="price"
                      label="Price"
                      control={control}
                      rules={{ required: "Price is required" }}
                      type="number"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <TextInputField
                      name="stock"
                      label="Stock"
                      control={control}
                      rules={{ required: "Stock is required" }}
                      type="number"
                    />
                  </div>
                  <div className="col-md-6">
                    <CustomSelect
                      name="category"
                      label="Category"
                      control={control}
                      rules={{ required: "Please select category" }}
                      option={[
                        { value: "1", label: "Category 1" },
                        { value: "2", label: "Category 2" },
                        { value: "3", label: "Category 3" },
                      ]}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <TextInputField
                      name="weight"
                      label="Weight"
                      control={control}
                      rules={{ required: "Weight is required" }}
                      type="number"
                    />
                  </div>
                  <div className="col-md-6">
                    <CustomSelect
                      name="status"
                      label="Status"
                      control={control}
                      rules={{ required: "Status select category" }}
                      option={[
                        { value: "1", label: "Active" },
                        { value: "2", label: "Blocked" },
                        { value: "3", label: "Inactive" },
                      ]}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <CustomTextArea
                      name="description"
                      label="Description"
                      control={control}
                      rules={{ required: "Description is required" }}
                      type="text"
                    />
                  </div>
                </div>

                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreateView;
