import { useState } from "react";
import "./App.css";

import products from "./data/shoesData.json";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";

const App = () => {
  const [modalState, setmodalState] = useState([]);
  const openModal = (modalData) => {
    setmodalState(modalData);
  };

  return (
    <div className="app container-fluid">
      <h1 className="text-center mb-5">Shoes Shop</h1>
      <ProductList productsData={products} onClickModal={openModal} />
      <Modal modalState={modalState} />
    </div>
  );
};

export default App;
