// Import stylesheets
import './style.css';
let url = 'https://swapi.dev/api/people/';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let promise = fetch(url);

function f() {
  promise
    .then((response) => {
      // console.log(response.json().results);
      return response.json();
      // let result = response.json().results;
      // console.log(result);
      // appDiv.innerHTML = result;
    })
    .then((people) => {
      console.log(people);
      const names = people.results.map((person) => person.name).join('\n');
      console.log(names);
      appDiv.innerHTML = names;
    })
    .catch((error) => {
      appDiv.innerHTML = error;
      return error;
    });
  // result.then((response) => {
  //   console.log(response);
  // });
  // console.log(result);
}
f();
