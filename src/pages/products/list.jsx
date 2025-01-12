import { useEffect } from "react";
import ProductListView from "../../modules/dashboard/products/list/product-list-view";
import feather from "feather-icons";

const ProductListpage = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <ProductListView />
    </>
  );
};

export default ProductListpage;
