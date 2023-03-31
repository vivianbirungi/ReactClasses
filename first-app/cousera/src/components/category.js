import React from "react";
import Stack from "react-bootstrap/Stack";  

function Category(props) {
  return (
    <>
      {JSON.stringify(props)}
      <Stack direction="horizontal" gap={3}>
        {/* {props.cat.map(category => <div key={category} value={category}>{category}</div>)} */}
        <div className="bg-light border">Utilities</div>
        <div className="bg-light border">Grocery</div>
        <div className="bg-light border">Entertainment</div>
      </Stack>
    </>
  );
}

export default Category;