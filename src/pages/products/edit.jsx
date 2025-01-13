import ProductCreateView from "../../modules/dashboard/products/create/product-add-new";

const ProductEditPage = () => {
  return (
    <div>
      <ProductCreateView currentProduct={null} editMode={true} />
    </div>
  );
};

export default ProductEditPage;
