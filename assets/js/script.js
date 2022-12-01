/*
var comment = document.getElementById("city");
var saveButton = document.getElementById("search");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var searchResults= {
  //student: student.value,
  //grade: grade.value,
  city: city.value.trim()
};

localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});

function renderMessage() {
  var finalResults = JSON.parse(localStorage.getItem("searchResults"));
  if (finalResults !== null) {
    document.querySelector(".message").textcontent = finalResults.comment 
  }
}

-----------------------------------------------
*/

var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var searchInput = {
  comment: comment.value.trim()
};

localStorage.setItem("searchInput", JSON.stringify(searchInput));
renderMessage();

});

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("searchInput"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.comment 
  }
}
