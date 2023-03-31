import React from "react";
import Table from "react-bootstrap/Table";
function Expense(props) {
  return (
    <>
      {JSON.stringify(props)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Expense;
