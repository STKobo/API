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

    let numPage = document.getElementById("pageNum").value;    
    fetch(BaseUrlUser+ '?' + new URLSearchParams({
            per_page: 3,
            page: +numPage
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


function createUser(){
    fetch(BaseUrlUser, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
                "name": "Yellow",
                "Job": "Developer"
            }) 
    })
    .then(function(response){
        return response.json();
    })
    .then(function(responseJson){
        //...
    })
}