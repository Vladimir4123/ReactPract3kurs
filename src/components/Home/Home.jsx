import React, { useEffect, useState } from "react";

function Header() {
  const headerStyle = {
    backgroundColor: "black",
    padding: "20px",
    textAlign: "center",
    color: "white",
  };

  return (
    <header style={headerStyle}>
      <h1>BVN</h1>
    </header>
  );
}

function Footer() {
  const footerStyle = {
    backgroundColor: "black",
    padding: "10px",
    textAlign: "center",
    color: "white",
  };

  return (
    <footer style={footerStyle}>
      <p>Все права защищены &copy; 2023</p>
    </footer>
  );
}

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setProducts(resp.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const productStyle = {
    width: "200px",
    margin: "10px",
  };

  const productTitleStyle = {
    fontWeight: "bold",
  };

  const productImageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div>
      <Header />
      <div style={productContainerStyle}>
        {products.map((item) => (
          <div key={item.id} style={productStyle}>
            <p style={productTitleStyle}>Товар: {item.title}</p>
            <p>Цена: {item.price}</p>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={productImageStyle}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
