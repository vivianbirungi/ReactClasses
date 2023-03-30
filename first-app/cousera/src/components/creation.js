import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function CreationExpenseForm() {
  return (
    <card className="card " style={{ padding: 15 }}>
      <div className="form-row">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Expense Name</Form.Label>
            <Form.Control
              id="name"
              name="expenseName"
              placeholder="Expense Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="amount">Amount</Form.Label>
            <Form.Control
              id="amount"
              name="amount"
              type="number"
              placeholder="Amount"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Select id="category" name="category">
              <option>Select Category</option>
              <option value="groceries">Grocery</option>
              <option value="entertainment">Entertainment</option>
              <option value="utilities">Utilities</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </card>
  );
}

export default CreationExpenseForm;
