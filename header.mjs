/**
 * Generates the header section of the table.
 * @param {Array<string>} fields - Array of field names for the table header.
 * @returns {string} - The HTML string for the table header.
 */
export function Header(fields) {
  // Create header cells for each field
  const headerCells = fields
    .map((field) => `<th class="text-center">${field}</th>`)
    .join("");
  // Return the complete header HTML
  return `<thead class="bg-success text-white"><tr>${headerCells}</tr></thead>`;
}
