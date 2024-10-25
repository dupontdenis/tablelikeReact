import { Header } from "./header.mjs";
import { Body } from "./body.mjs";

/**
 * Generates an HTML table element with the provided data.
 * @param {Array<Object>} data - Array of objects representing the table data.
 * @returns {HTMLElement} - The generated table element.
 */
export function Table(data) {
  // Create a table element
  const table = document.createElement("table");
  // Add Bootstrap classes for styling
  table.className = 'table table-striped table-bordered table-hover';
  
  // Get the fields (keys) from the first object in the data array
  const fields = Object.keys(data[0]);

  // Set the inner HTML of the table with the header and body
  table.innerHTML = Header(fields) + Body(data);

  // Return the generated table element
  return table;
}
