import { useEffect } from "react";
import ProductCreateView from "../../modules/dashboard/products/create/product-add-new";
import feather from "feather-icons";

const ProductCreatePage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <ProductCreateView />
    </>
  );
};

export default ProductCreatePage;
