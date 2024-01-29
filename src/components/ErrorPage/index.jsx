import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  // Ensure that error is defined before accessing its properties
  const errorMessage = error?.statusText || error?.message || "Unknown error";

  return (
    <div id="error-page" style={styles.container}>
      <h1 style={styles.title}>Oops!</h1>
      <p style={styles.message}>Sorry, something went wrong.</p>
      <p style={styles.errorMessage}>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    marginTop: "5rem",
  },
  title: {
    fontSize: "2rem",
    color: "#ff5252", // or any color that suits your design
  },
  message: {
    fontSize: "1.2rem",
    margin: "1rem 0",
  },
  errorMessage: {
    fontSize: "1rem",
    color: "#757575", // or any color for the error message
  },
};

export default ErrorPage;
