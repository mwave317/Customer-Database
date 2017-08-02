

let people = "";
let header =`<h1>INTERNAL COMPANY DIRECTORY</h1>`
for (let i=0; i<customers.results.length; i++) {

let main = `
  <figure>
  <img src=${customers.results[i].picture.large}></img>
  <figurecaption>
  <p class="name person">${customers.results[i].name.title} ${customers.results[i].name.first} ${customers.results[i].name.last}</p>
  <p class="email person">${customers.results[i].email}</p>
  <p class="info person">${customers.results[i].location.street}</p>
  <p class="info person">${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}<p>
  <p class="info person">${customers.results[i].cell}</p>
  <p class="ss">${customers.results[i].id.name} ${customers.results[i].id.value}</p>
  </figurecaption>
  </figure>
  `;
people += main;
}

let parent = document.querySelector("body");
parent.innerHTML= header + people;
