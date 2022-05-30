import ProductItem from "./ProductItem";

const ProductList = ({ productsData, onClickModal }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between ">
        {productsData.map((product) => (
          <ProductItem
            item={product}
            key={product.id}
            onClickModal={onClickModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
