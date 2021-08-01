import { theme } from "../themes/changeTheme.js";

/**
 * Inserts new input box after a search.
 * Manages color of the input box based on current theme.
 * @param {number} id - The number of input boxes available.
 */
export function addInput(id) {
  // Add new input box.
  const input = document.createElement("input");
  input.classList.add("word");
  input.classList.add("input");
  input.id = `input-box${id + 1}`;
  input.type = "text";
  input.placeholder = "Enter a Word here!";

  // Coloring the input box based on the current theme.
  input.style.backgroundColor = `var(--input-${theme}-bg)`;
  input.style.color = `var(--input-${theme}-text)`;
  input.style.borderColor = `1px solid var(--input-${theme}-bg)`;

  document.getElementById("input-container").appendChild(input);
}
