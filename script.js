fetch("https://reqres.in/api/users", {method: 'GET'})
.then(async(responseHTTP) => 
{ 
  let resultJSON = await responseHTTP.json();
  let entriesDiv = document.getElementById("allentries");
  entriesDiv.innerHTML = resultJSON.total + '<bR/>' + '<bR/>';

  resultJSON.data.forEach(element => {
  entriesDiv.innerHTML += element.first_name + '<bR/>';
  });
});