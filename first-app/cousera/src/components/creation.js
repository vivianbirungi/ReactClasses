import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Expense from "./expense";
import { useNavigate } from "react-router-dom";
function CreationExpenseForm(props) {
  const navigate = useNavigate();

  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const handleState = (event) => {
    event.preventDefault();
    // console.log(expenseName, amount, category);
    props.action([{ expenseName, amount, category }]);
  };
  //use replace:true to clear history
  return (
    <>
      {" "}
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Card className="card" style={{ padding: 15 }}>
        <div className="form-row">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Expense Name</Form.Label>
              <Form.Control
                id="name"
                name="expenseName"
                placeholder="Expense Name"
                onChange={(e) => setExpenseName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="amount">Amount</Form.Label>
              <Form.Control
                id="amount"
                name="amount"
                type="number"
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="category">Category</Form.Label>
              <Form.Select
                id="category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option value="groceries">Grocery</option>
                <option value="entertainment">Entertainment</option>
                <option value="utilities">Utilities</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" onClick={() => navigate("/expenses")}>
              Submit
            </Button>
          </Form>
        </div>
      </Card>
    </>
  );
}

export default CreationExpenseForm;
