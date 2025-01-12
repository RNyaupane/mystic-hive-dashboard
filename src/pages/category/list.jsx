import { useEffect } from "react";
import CategoryListView from "../../modules/dashboard/category/list-view";
import feather from "feather-icons";

const CategoryListPage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div>
      <CategoryListView />
    </div>
  );
};

export default CategoryListPage;
