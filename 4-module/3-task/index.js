function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const statusCell = row.querySelector('td[data-available]');
    const genderCell = row.querySelector('td:nth-child(3)');
    const ageCell = row.querySelector('td:nth-child(2)');

    if (statusCell) {
      const isAvailable = statusCell.dataset.available;
      row.classList.toggle('available', isAvailable === 'true');
      row.classList.toggle('unavailable', isAvailable === 'false');
    }

    if (!statusCell) {
      row.hidden = true;
    }

    if (genderCell) {
      const gender = genderCell.textContent;
      row.classList.toggle('male', gender === 'm');
      row.classList.toggle('female', gender === 'f');
    }

    if (ageCell) {
      const age = parseInt(ageCell.textContent);
      if (age < 18) {
        row.style.textDecoration = 'line-through';
      }
    }
  });
}
