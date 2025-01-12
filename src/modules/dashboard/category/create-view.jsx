/* eslint-disable no-unused-vars */
import TextInputField from "../../../components/form-element/text-input";
import PageBreadcrumb from "../../../components/page-breadcrumb";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextArea from "../../../components/form-element/text-area";
import { useDispatch } from "react-redux";
import { categoryService } from "../../../redux/actions/categoryActions";
import { categoryApi } from "../../../redux/api-service/categoryApi";
import { toast } from "react-toastify";
import { categorySlice } from "../../../redux/reducers/categorySlice";

const CategoryCreateView = ({ currentCategory, editMode = false }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Product name is required")
      .max(100, "Product name must not exceed 100 characters"),
    description: yup
      .string()
      .required("Description is required")
      .max(1000, "Description must not exceed 1000 characters"),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await categoryApi.postCategory(data);
      if (res?.status === 200 || res?.status === 201) {
        toast.success(res?.message);
        // dispatch(categorySlice.actions.postCategory(res?.data));
        reset();
      }
      console.log(res);
    } catch (error) {
      toast.error(error?.response?.data?.message?.[0]);
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
              <h6 className="card-title mb-4">Add New Category</h6>

              <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <TextInputField
                      name="name"
                      label="Category Name"
                      control={control}
                      type="text"
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <CustomTextArea
                      name="description"
                      label="Description"
                      control={control}
                      placeholder={"Enter Category Description"}
                    />
                  </div>
                </div>

                <div className="d-flex gap-3 ">
                  <button className="btn btn-light px-4" type="submit">
                    Cancel
                  </button>
                  <button className="btn btn-primary px-4" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCreateView;
