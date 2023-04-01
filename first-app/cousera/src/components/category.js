import React from "react";
import Stack from "react-bootstrap/Stack";

function Category(props) {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        {props.cat.map((category) => (
          <div className="bg-light border" key={category} value={category}>
            {category}
          </div>
        ))}
      </Stack>
    </>
  );
}

export default Category;
