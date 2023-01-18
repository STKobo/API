/*fetch("https://reqres.in/api/users", {method: 'GET'})
.then(async(responseHTTP) => 
{ 
  let resultJSON = await responseHTTP.json();
  let entriesDiv = document.getElementById("allentries");
  entriesDiv.innerHTML = resultJSON.total + '<bR/>' + '<bR/>';

  resultJSON.data.forEach(element => {
  entriesDiv.innerHTML += element.first_name + '<bR/>';
  });
});
*/

const allEntriesDiv = document.getElementById("allentries");

fetch("https://reqres.in/api/users") 
.then(function(response){
    //cette réponse est en texte 
    // traduire la réponse
    return response.json();
})
.then(function(responseJson){
    //je peux utiliser ma data en objet 
    responseJson.data.forEach(element => {
        allEntriesDiv.innerHTML += element.email + "<br>";
    });
})