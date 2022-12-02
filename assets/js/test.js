
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

//saved output of searches to local storage


function renderMessage() {
  var finalSearch = JSON.parse(localStorage.getItem("searchInput"));
  if (finalSearch !== null) {
    document.querySelector(".message").textContent = finalSearch.comment 
  }
}





var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);






























// open weather API 
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//7eaa91188312f6b60b611deb90430946

////var APIKey = "7eaa91188312f6b60b611deb90430946";

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

//api.openweathermap.org. 

//display location, date, temp, wind, humidity


//display 5 day forecast in 5 blocks

/*     call weather from open weather
getData();

async function getData() {
    //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}-->
    const response = await fetch
    
    ('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7eaa91188312f6b60b611deb90430946')

//then syntax


    console.log(response);
   /* const data = await response.json();
    console.log(data);
    length = data.drinks.length;
    console.log(data);
    var temp = "";
    for (i = 0; i < length; i++) {
        temp += "<tr>";
        temp += "<td>" + data.drinks[i].strDrink + "</td>";
        temp += "<td>" + data.drinks[i].strInstructions + "</td>";
    }

    document.getElementById("data").innerHTML = temp;
   
}


api call
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 
metric
https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric
*/


