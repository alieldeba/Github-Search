let searchBtn = document.querySelector("button");
let state = document.querySelector("p");

async function getUserStats() {
  let user = document.querySelector("input").value;
  user = user.replace(" ", "-");
  let response = await fetch(`https://api.github.com/users/${user}`);
  let data = await response.json();
  console.log(data);
  if (!data.login) {
    state.innerText = "Process failed open the console please";
    throw new Error("Cannot Find User");
  } else {
    state.innerText = "Process done successfuly open the console please";
  }
}

searchBtn.onclick = function () {
  getUserStats();
};
