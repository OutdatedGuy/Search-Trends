import { getTrends } from "./api/getTrends.js";
import { theme, changeTheme } from "./themes/changeTheme.js";
import { addInput } from "./helpers/addInput.js";
import { getLoading } from "./helpers/getLoading.js";

document.addEventListener("DOMContentLoaded", () => {
  if (theme === "dark") {
    document.getElementById("dark-mode").checked = true;
    changeTheme();
  }
  addInput(0);
});

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

document.getElementById("dark-mode").addEventListener("click", changeTheme);
