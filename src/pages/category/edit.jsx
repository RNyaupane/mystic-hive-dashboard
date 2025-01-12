import { useEffect } from "react";
import CategoryCreateView from "../../modules/dashboard/category/create-view";
import feather from "feather-icons";

const CategoryEditPage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div>
      <CategoryCreateView editMode={true} />
    </div>
  );
};

export default CategoryEditPage;
