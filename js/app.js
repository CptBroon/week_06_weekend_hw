document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#new-item-form")
    .addEventListener("submit", handleFormSubmit);
  document.querySelector("#delete").addEventListener("click", deleteAllEntries);
});

const handleFormSubmit = function (e) {
  e.preventDefault();
  const newCharacter = createNewCharacter(this);
  const characterList = document.querySelector("#character-list");
  characterList.appendChild(newCharacter);

  this.reset();
};

const createNewCharacter = function (form) {
  const characterListEntry = document.createElement("li");
  characterListEntry.classList.add("character-card");
  characterListEntry.classList.add("flex-column");

  const name = document.createElement("h3");
  name.textContent = `${form.firstName.value} ${form.lastName.value}`;
  characterListEntry.appendChild(name);

  const species = document.createElement("h4");
  species.textContent = form.species.value;
  characterListEntry.appendChild(species);

  const age = document.createElement("p");
  age.textContent = `Age: ${form.age.value}`;
  characterListEntry.appendChild(age);

  const alignment = document.createElement("p");
  alignment.textContent = form.alignment.value;
  characterListEntry.appendChild(alignment);

  return characterListEntry;
};

const deleteAllEntries = function () {
  const characterList = document.querySelector("ul");
  characterList.textContent = "";
};
