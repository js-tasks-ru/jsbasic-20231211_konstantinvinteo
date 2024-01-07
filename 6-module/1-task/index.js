/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable();
  }

  createTable() {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    this.rows.forEach((row) => {
      const tr = document.createElement("tr");

      for (const key in row) {
        const td = document.createElement("td");
        td.innerText = row[key];
        tr.appendChild(td);
      }

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteButton.addEventListener("click", () => {
        tbody.removeChild(tr);
      });

      tr.appendChild(deleteButton);
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
  }
}
