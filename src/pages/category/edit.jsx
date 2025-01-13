import CategoryCreateView from "../../modules/dashboard/category/create-view";

const CategoryEditPage = () => {
  return (
    <div>
      <CategoryCreateView editMode={true} />
    </div>
  );
};

export default CategoryEditPage;
