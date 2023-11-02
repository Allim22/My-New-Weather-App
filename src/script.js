function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form-id");
searchFormElement.addEventListener("submit", handleSearch);
