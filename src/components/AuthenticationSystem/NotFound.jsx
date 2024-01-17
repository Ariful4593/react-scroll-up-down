import React from "react";
import "./NotFound.css";
function NotFound({ Link }) {
  return (
    <div className="page-not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Oops! Looks like you've stumbled upon a page that doesn't exist.
      </p>
      <Link to="/" className="go-home-button">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
