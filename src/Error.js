import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

function Error() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <div className="page-error">
      <h1>Page Not Found</h1>
      <Link to="/">
        <button className="btn">Back to home</button>
      </Link>
    </div>
  );
}

export default Error;
