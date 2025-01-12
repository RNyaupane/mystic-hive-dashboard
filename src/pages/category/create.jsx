import { useEffect } from "react";
import CategoryCreateView from "../../modules/dashboard/category/create-view";
import feather from "feather-icons";

const CategoryCreatePage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div>
      <CategoryCreateView />
    </div>
  );
};

export default CategoryCreatePage;
