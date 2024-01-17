import React from "react";
function Unauthorized({Link}) {
  return (
    <div className="not-found-wrap text-center">
      <h1 className="text-60">401</h1>
      <p className="text-36 subheading mb-3">Error!</p>
      <p className="mb-5 text-muted text-18">
        Sorry! You have no permission to perform this task.
      </p>
      <Link className="btn btn-lg btn-outline-primary btn-rounded" to={"/"}>
        Go back to home
      </Link>
    </div>
  );
}

export default Unauthorized;
