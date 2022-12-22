import React, { useState } from "react";

const AddForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleValue() {
    const newProduct = {
      title,
      price,
      image,
    };
    addProduct(newProduct);
  }
  return (
    <div className="container">
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        placeholder="image"
        type="text"
      />
      <button onClick={handleValue}>add product</button>
    </div>
  );
};

export default AddForm;
