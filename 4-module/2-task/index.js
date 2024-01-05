function makeDiagonalRed(table) {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.cells;
    const cell = cells[i];
    cell.style.backgroundColor = 'red';
  }
}
