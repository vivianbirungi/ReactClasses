import React from "react";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";

function Category(props) {
  const cat = ["utilities", "grocery", "entertainment"];
  return (
    <>
      {/* dont include forward slash for the nested route */}
      <nav>
        {cat.map((category) => (
          <Link to={category} style={{ margin: 10 }}>
            {category}
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  );
}

export default Category;
