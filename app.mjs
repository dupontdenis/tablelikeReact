import { Table } from "./table.mjs";
import { Title } from "./title.mjs";

// Define two groups of people
const EUROPE_GROUP = [
  { name: "Jean Dupont", age: 30, country: "France" },
  { name: "Maria Rossi", age: 25, country: "Italy" },
  { name: "Emily Jones", age: 22, country: "UK" },
  { name: "Tom Brown", age: 35, country: "Germany" },
];

const NORTH_AFRICA_GROUP = [
  { name: "Ahmed Ben Ali", age: 20, country: "Morocco" },
  { name: "Alice Johnson", age: 28, country: "Algeria" },
];

// Reference to document body
const body = document.body;

// Create and append elements to the body
body.innerHTML = `
  ${Title('Group 1: Europe')}
  ${Table(EUROPE_GROUP).outerHTML}
  ${Title('Group 2: North Africa')}
  ${Table(NORTH_AFRICA_GROUP).outerHTML}
`;