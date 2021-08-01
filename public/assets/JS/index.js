import { getTrends } from "./api/getTrends.js";
import { theme, changeTheme } from "./themes/changeTheme.js";

document.addEventListener("DOMContentLoaded", addInput.bind(this, 0));
document.getElementById("input-container").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputs = document.getElementsByClassName("word input");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length === 0 || !inputs[i].value.trim()) {
        document.getElementById(inputs[i].id).remove();
        console.log(inputs.length);
        i--;
      }
    }

    if (inputs.length > 0) {
      getLoading(true);
      getTrends().then(() => {
        if (inputs.length < 5) {
          addInput(inputs.length);
        }
        getLoading(false);
      });
    } else {
      addInput(inputs.length);
      getLoading(false);
    }
  }
});

function addInput(id) {
  const input = document.createElement("input");
  input.classList.add("word");
  input.classList.add("input");
  input.id = `input-box${id + 1}`;
  input.type = "text";
  input.placeholder = "Enter a Word here!";

  input.style.backgroundColor = `var(--input-${theme}-bg)`;
  input.style.color = `var(--input-${theme}-text)`;
  input.style.borderColor = `1px solid var(--input-${theme}-bg)`;

  document.getElementById("input-container").appendChild(input);
}

function getLoading(start) {
  if (start) {
    document.getElementById("barChart").style.display = "none";
    document.getElementById("lineChart").style.display = "none";
    document.getElementById("loading-container").style.display = "flex";
  } else {
    document.getElementById("loading-container").style.display = "none";
    document.getElementById("barChart").style.display = "inline-block";
    document.getElementById("lineChart").style.display = "inline-block";
  }
}

document.getElementById("dark-mode").addEventListener("click", changeTheme);
