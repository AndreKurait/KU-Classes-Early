// Taken from https://codepen.io/jonnitto/project/editor/XRPjxx

// Minimal Javascript (for Edge, IE and select box)
document.addEventListener("change", function(event) {
  let element = event.target;
  if (element && element.matches(".form-element-field")) {
    element.classList[element.value ? "add" : "remove"]("-hasvalue");
  }
});
function getMyClasses(search) {
  window.location.href = "https://classes.ku.edu/Classes/CreateXLS.action?" + "classesSearchText=" + search.split(' ').join('+') + "&searchCareer=UndergraduateGraduate&searchTerm=4209"
  ;
}