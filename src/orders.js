// Planted bugs for E2E testing of code-review-agent.
// Critical: SQL injection via string concatenation (line 12).
// Warning:  userId may be undefined/null and interpolated unguarded (line 12 / 17).
function query(sql) {
  // stub: pretend this executes SQL against the database
  return [{ id: 1, title: "sample" }];
}

// CRITICAL: term and userId are user-controlled and interpolated directly into SQL.
function searchOrders(term, userId) {
  const sql =
    "SELECT * FROM orders WHERE user_id = " + userId +
    " AND title LIKE '%" + term + "%'";
  return query(sql);
}

// WARNING: getUser may be called with a null/undefined id -> broken SQL + throw.
function getUser(id) {
  const rows = query("SELECT * FROM users WHERE id = " + id);
  return rows && rows[0] ? rows[0].name : null;
}

module.exports = { searchOrders, getUser };
