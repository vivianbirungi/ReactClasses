import React from "react";
import Stack from "react-bootstrap/Stack";
function Category() {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div className="bg-light border">Utilities</div>
        <div className="bg-light border">Grocery</div>
        <div className="bg-light border">Entertainment</div>
      </Stack>
    </>
  );
}

export default Category;
