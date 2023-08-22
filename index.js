
// 1. Target the main element
const main = document.getElementById("main");

// 2. Set a loading placeholder
main.innerHTML = "<p>Loading...</p>";

// 3. Fetch data and append character names to the main element
fetch("https://swapi.dev/api/people")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((people) => {
    // 4. Create a function to list names
    const nameList = createNameList(people.results);
    // console.log(nameList);
    main.innerHTML = nameList;
    // allign text left
    document.getElementById("main").style.textAlign = 'left';

    // 5. Add event listener to names for showing details on click
    const nameItems = document.querySelectorAll(".name-item");
    nameItems.forEach((nameItem) => {
      nameItem.addEventListener("click", () => {
        showDetails(nameItem.dataset.id, people.results);
      });
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// 6. Create a function to generate a list of names
const createNameList = (people) => {
  const names = people.map((person, index) => {
    return `<li class="name-item" data-id="${index}">${person.name}</li>`;
  }).join("\n");
  return `<ul>${names}</ul>`;
};

// 7. Create a function to display details (gender and height)
const showDetails = (id, people) => {
  const person = people[id];
  main1.innerHTML = `<p>Name: ${person.name}</p><p>Gender: ${person.gender}</p><p>Height: ${person.height}</p>`;
  // You can add a "Back" button or implement your desired behavior here to go back to the names list.
};


    
   

