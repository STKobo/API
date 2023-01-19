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
const basURL = 'https://reqres.in/';
const BaseUrlUser = basURL+"api/users";
document.getElementById("getUSers").addEventListener("click", function(){
    getAllUsers();
})

function getAllUsers(){

    fetch(BaseUrlUser+ '?' + new URLSearchParams({
            per_page: 3 
        }).toString()
        , {method :'GET'})
    .then(function(response){
        //cette réponse est en texte 
        // traduire la réponse
        return response.json();
    })
    .then(function(responseJson){
        allEntriesDiv.innerHTML = ' ';
        
        let allUserArray = responseJson.data;

        allUserArray.forEach(user => {
            allEntriesDiv.innerHTML += user.email + "<br>";
        });
    });

}


