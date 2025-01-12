import { useEffect } from "react";
import ProductCreateView from "../../modules/dashboard/products/create/product-add-new";
import feather from "feather-icons";

const ProductEditPage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div>
      <ProductCreateView currentProduct={null} editMode={true} />
    </div>
  );
};

export default ProductEditPage;
