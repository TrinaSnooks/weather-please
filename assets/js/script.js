
//city search form

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

/*----open weather api---------

fetch('url')
  .then(response => {
    //handle response            
    console.log(response);
  })
  .then(data => {
    //handle data
    console.log(data);
  })
  .catch(error => {
    //handle error
  });

  */

//fetch weather api


//var APIKey = "7eaa91188312f6b60b611deb90430946";


// open weather API 
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//


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
 */




