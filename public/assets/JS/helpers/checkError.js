export function checkError(status, message) {
  const element = document.getElementById("error");
  if (status === 200) {
    element.style.display = "none";
    return false;
  } else {
    element.style.display = "inline-block";
    if (status === 400) {
      element.innerText = message;
    } else {
      element.innerText = "OOPS! Something went wrong";
    }
    return true;
  }
}
