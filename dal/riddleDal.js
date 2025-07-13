import pool from "../db.js";

async function getAllRiddles() {
  const [rows] = await pool.query("SELECT * FROM ");
  return rows;
}

async function getCustomersByCountry(req, res) {
  const [rows] = await pool.query(
    " SELECT * FROM customers WHERE country = 'france'"
  );
  res.send(rows);
}

async function getmEployeesByReportsId(req, res) {
  const [rows] = await pool.query(
    "SELECT firstName,lastName FROM employees WHERE reportsTo = 1143"
  );
  res.send(rows);
}

async function getHowManyProductsByProductLine(req, res) {
  const [rows] = await pool.query(
    "SELECT COUNT(*) FROM products WHERE productLine = 'classic cars'"
  );
  res.send(rows);
}

export {
  getAllRiddles,
  getCustomersByCountry,
  getmEployeesByReportsId,
  getHowManyProductsByProductLine,
};
