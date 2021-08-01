/**
 * Shows/hides the
 * - loading animation
 * - chart
 * @param {boolean} show - True to show loading, false to hide.
 */
export function getLoading(show) {
  if (show) {
    document.getElementById("barChart").style.display = "none";
    document.getElementById("lineChart").style.display = "none";
    document.getElementById("loading-container").style.display = "flex";
  } else {
    document.getElementById("loading-container").style.display = "none";
    document.getElementById("barChart").style.display = "inline-block";
    document.getElementById("lineChart").style.display = "inline-block";
  }
}
