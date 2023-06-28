import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LineWobble } from "@uiball/loaders";

function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const credentials = { username, password };
    console.log("Send a request to the server:", credentials);

    try {
      await dispatch(login(credentials));
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log("Error:", error);
      setIsLoading(false);
    }
  };

  const getErrorMessage = () => {
    if (error === "Invalid credentials") {
      return "Login or password entered incorrectly";
    }
    return error;
  };

  const getWelcomeMessage = () => {
    if (user) {
      const { firstName, lastName } = user;
      return (
        <h3 style={{ color: "#333", marginBottom: "10px" }}>
          Welcome,
          <br />
          <span style={{ fontSize: "24px" }}>
            {firstName} {lastName}!
          </span>
        </h3>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            padding: "40px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            marginTop: "-100px",
          }}
        >
          <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
            Entrance
          </h1>
          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ff3b30",
                marginBottom: "10px",
              }}
            >
              <FiAlertCircle size={16} style={{ marginRight: "5px" }} />
              {getErrorMessage()}
            </div>
          )}
          {isLoggedIn && user && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00cc00",
                marginBottom: "10px",
              }}
            >
              {getWelcomeMessage()}
            </div>
          )}
          <form
            onSubmit={handleLogin}
            style={{ marginBottom: "20px", textAlign: "left" }}
          >
            <label htmlFor="username" style={{ color: "#333" }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
            <label htmlFor="password" style={{ color: "#333" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  zIndex: 999,
                }}
              >
                <LineWobble
                  size={80}
                  lineWeight={5}
                  speed={1.75}
                  color="black"
                />
              </div>
            ) : (
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Enter
              </button>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
