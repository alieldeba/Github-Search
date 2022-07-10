let search = document.querySelector("input");
let searchBtn = document.querySelector("button");
let userImg = document.querySelector("img");
let userName = document.querySelector(".username");
let login = document.querySelector(".login");
let userBio = document.querySelector(".bio");
let userRepos = document.querySelector(".repos");
let userFollowers = document.querySelector(".followers");
let userFollowing = document.querySelector(".following");
let userLocation = document.querySelector(".location p");
let userTwitter = document.querySelector(".twitter p");
let userWebsite = document.querySelector(".website p");
let userCompany = document.querySelector(".company p");

window.onload = function () {
  search.focus();
};

async function getUserData() {
  // Getting input username & formatting it
  let user = search.value;
  user = user.replace(" ", "-");
  // Getting github username api data
  let response = await fetch(`https://api.github.com/users/${user}`);
  let data = await response.json();
  console.log(data);
  // Storing data
  let loginName = data.login;
  let name = data.name;
  let location = data.location;
  let img = data.avatar_url;
  let bio = data.bio;
  let blog = data.blog;
  let followers = data.followers;
  let following = data.following;
  let repos = data.public_repos;
  let twitter = data.twitter_username;
  let page = data.html_url;
  let company = data.company;
  // Displaying data
  userImg.src = img;
  userImg.alt = loginName || "github user";
  userName.innerText = name;
  login.innerText = "@" + loginName;
  login.href = page;
  userBio.innerText = bio || "This user has no bio";
  userRepos.innerText = repos;
  userFollowers.innerText = followers;
  userFollowing.innerText = following;
  userLocation.innerText = location || "Not available";
  userTwitter.innerText = twitter || "Not available";
  userWebsite.innerText = blog || "Not available";
  userCompany.innerText = company || "Not available";
}

searchBtn.onclick = function () {
  getUserData();
};

/*
{login: 'alieldeba', id: 88302640, node_id: 'MDQ6VXNlcjg4MzAyNjQw', avatar_url: 'https://avatars.githubusercontent.com/u/88302640?v=4', gravatar_id: '', …}
avatar_url: "https://avatars.githubusercontent.com/u/88302640?v=4"
bio: "Junior FrontEnd Web Developer :desktop_computer:"
blog: "alieldeba.netlify.app"
company: null
created_at: "2021-08-02T04:05:43Z"
email: null
events_url: "https://api.github.com/users/alieldeba/events{/privacy}"
followers: 8
followers_url: "https://api.github.com/users/alieldeba/followers"
following: 8
following_url: "https://api.github.com/users/alieldeba/following{/other_user}"
gists_url: "https://api.github.com/users/alieldeba/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/alieldeba"
id: 88302640
location: "Egypt, Elgharbia, Tanta"
login: "alieldeba"
name: "Ali Eldeba"
node_id: "MDQ6VXNlcjg4MzAyNjQw"
organizations_url: "https://api.github.com/users/alieldeba/orgs"
public_gists: 0
public_repos: 21
received_events_url: "https://api.github.com/users/alieldeba/received_events"
repos_url: "https://api.github.com/users/alieldeba/repos"
site_admin: false
starred_url: "https://api.github.com/users/alieldeba/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/alieldeba/subscriptions"
twitter_username: "AliEldeba"
type: "User"
updated_at: "2022-07-10T04:28:06Z"
url: "https://api.github.com/users/alieldeba"
[[Prototype]]: Object
*/
