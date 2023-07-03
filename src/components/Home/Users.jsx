import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../store/usersSlice";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
    borderRadius: "8px",
    position: "relative",
    background: "grey",
  };

  const thStyle = {
    padding: "12px 16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
    backgroundColor: "aquamarine",
    color: "black",
    position: "sticky",
    top: 0,
    zIndex: 1,
  };

  const tdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid black",
    color: "black",
    textAlign: "left",
    backgroundColor: "grey",
  };

  const loadingStyle = {
    fontStyle: "italic",
    color: "black",
    marginTop: "20px",
  };

  const errorStyle = {
    color: "red",
    fontWeight: "bold",
    marginTop: "20px",
  };
  return (
    <div>
      {loading ? (
        <p style={loadingStyle}>Loading...</p>
      ) : error ? (
        <p style={errorStyle}>Error: {error}</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle} className="user-table">
            <thead>
              <tr>
                <th style={thStyle}></th>
                <th style={thStyle}>NAME</th>
                <th style={thStyle}>EMAIL</th>
                <th style={thStyle}>USER NAME</th>
                <th style={thStyle}>AGE</th>
                <th style={thStyle}>GENDER</th>
                <th style={thStyle}>CITY</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={user.image}
                        alt="User"
                        className="user-photo"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        {user.firstName}
                      </span>{" "}
                      {user.lastName}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.email}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.username}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.age}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.gender}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.address.city}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
