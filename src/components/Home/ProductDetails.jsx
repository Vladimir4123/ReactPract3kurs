import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../store/productDetailsSlice";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    padding: "20px",
    border: "1px solid black",
    backgroundColor: "white",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "black",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "grey",
    textAlign: "center",
  },
  price: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "black",
  },
  label: {
    fontWeight: "bold",
    marginRight: "4px",
    color: "grey",
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "20px",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  image: {
    width: "50%",
    height: "50%",
    marginBottom: "10px",
  },
};

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  if (productDetails.loading) {
    return <p>Loading...</p>;
  }

  if (productDetails.error) {
    return <p>Error: {productDetails.error}</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        background: "white",
      }}
    >
      <div style={styles.container}>
        <img
          src={productDetails.thumbnail}
          alt="Thumbnail"
          style={styles.thumbnail}
        />
        <h2 style={styles.title}>{productDetails.title}</h2>
        <p style={styles.description}>{productDetails.description}</p>
        <p style={styles.price}>Price: {productDetails.price}$</p>
        <p>
          <span style={styles.label}>Discount:</span>{" "}
          {productDetails.discountPercentage}%
        </p>
        <p>
          <span style={styles.label}>Rating:</span> {productDetails.rating}
        </p>
        <p>
          <span style={styles.label}>Stock:</span> {productDetails.stock}
        </p>
        <p>
          <span style={styles.label}>Brand:</span> {productDetails.brand}
        </p>
        <p>
          <span style={styles.label}>Category:</span> {productDetails.category}
        </p>
        <div style={styles.imagesContainer}>
          {productDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={styles.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
