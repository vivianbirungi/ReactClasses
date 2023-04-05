import React from "react";
import Table from "react-bootstrap/Table";
function Expense(props) {
  const data = [
    { expenseName: "Water", category: "Utilities", amount: 10000 },
    { expenseName: "Milk", category: "Grocery", amount: 1600 },
    { expenseName: "Electricity", category: "Utilities", amount: 16000 },
  ];

  return (
    <>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.expenseName}</td>
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
