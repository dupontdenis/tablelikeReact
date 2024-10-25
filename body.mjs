/**
 * Generates the body section of the table.
 * @param {Array<Object>} data - Array of objects representing the table data.
 * @returns {string} - The HTML string for the table body.
 */
export function Body(data) {
  // Create rows for each data entry
  const rows = data
    .map(({ name, age, country }) => {
      return `<tr class="text-center"><td>${name}</td><td>${age}</td><td>${country}</td></tr>`;
    })
    .join("");
  // Return the complete body HTML
  return `<tbody>${rows}</tbody>`;
}
