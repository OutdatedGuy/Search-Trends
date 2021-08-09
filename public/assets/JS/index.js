import { getTrends } from "./api/getTrends.js";
import { theme, changeTheme } from "./themes/changeTheme.js";
import { addInput } from "./helpers/addInput.js";
import { getLoading } from "./helpers/getLoading.js";

// Set theme and add input box to the page
document.addEventListener("DOMContentLoaded", () => {
  if (theme === "dark") {
    document.getElementById("dark-mode").checked = true;
    changeTheme();
  }
  addInput(0);
});

// When ENTER is pressed, show loading and get trends
document.getElementById("input-container").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // Removes empty input boxes
    const inputs = document.getElementsByClassName("word input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].blur();
      if (inputs[i].value.length === 0 || !inputs[i].value.trim()) {
        document.getElementById(inputs[i].id).remove();
        // console.log(inputs.length);
        i--;
      }
    }

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].id = `input-box${i + 1}`;
    }

    // Show loading and get trends
    if (inputs.length > 0) {
      getLoading(true);
      document.getElementById("error").style.display = "none";
      getTrends().then(success => {
        if (inputs.length < 5 && success) {
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

// When the dark mode checkbox is clicked, change theme
document.getElementById("dark-mode").addEventListener("click", changeTheme);
