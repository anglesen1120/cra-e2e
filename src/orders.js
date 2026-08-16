// Planted bugs for E2E testing of code-review-agent.
// Critical: SQL injection via string concatenation (line 12).
// Warning:  userId may be undefined/null and interpolated unguarded (line 12 / 17).
function query(sql, params = []) {
  // stub: pretend this executes parameterized SQL against the database
  return [{ id: 1, title: "sample" }];
}

// FIXED: parameterized query — no user input is interpolated into SQL.
function searchOrders(term, userId) {
  const sql = "SELECT * FROM orders WHERE user_id = ? AND title LIKE ?";
  return query(sql, [userId, `%${term}%`]);
}

// WARNING: getUser may be called with a null/undefined id -> broken SQL + throw.
function getUser(id) {
  const rows = query("SELECT * FROM users WHERE id = " + id);
  return rows && rows[0] ? rows[0].name : null;
}

module.exports = { searchOrders, getUser };

// trivial E2E noop comment
