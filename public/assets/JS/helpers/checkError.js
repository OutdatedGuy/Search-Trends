export function checkError(status, message) {
  if (status !== 200) {
    const element = document.getElementById("error");
    element.style.display = "inline-block";
    if (status === 400) {
      element.innerText = message;
    } else {
      element.innerText = "OOPS! Something went wrong";
    }
    return true;
  }

  return false;
}
