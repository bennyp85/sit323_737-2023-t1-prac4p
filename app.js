const express = require('express');
const app = express();

app.use(express.json());

app.get('/add', (req, res) => {
  performOperation(req, res, (num1, num2) => num1 + num2);
});

app.get('/subtract', (req, res) => {
  performOperation(req, res, (num1, num2) => num1 - num2);
});

app.get('/multiply', (req, res) => {
  performOperation(req, res, (num1, num2) => num1 * num2);
});

app.get('/divide', (req, res) => {
  performOperation(req, res, (num1, num2) => num1 / num2);
});

function performOperation(req, res, operation) {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ message: 'Invalid input parameters' });
    return;
  }

  const result = operation(num1, num2);
  res.status(200).json({ result });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Calculator microservice is running on port ${port}`);
});
