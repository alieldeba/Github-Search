import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import States from "./components/States";

export default function App() {
  const [user, setUser] = useState("");
  const [userApi, setUserApi] = useState({});
  const api = `https://api.github.com/users/${user}`;

  function getUserApi(e) {
    e.preventDefault();

    axios.get(api).then((response) => {
      setUserApi(response.data);
      console.log(response.data);
    });
  }

  function setUserName(name) {
    setUser(name.trim().replace(/\s+/g, "-"));
  }

  return (
    <>
      <div className="container m-auto">
        <Search setUserName={setUserName} getUserApi={getUserApi} />
        <States
          img={userApi.avatar_url}
          name={userApi.name}
          login={userApi.login}
          repos={userApi.public_repos}
          bio={userApi.bio}
          company={userApi.company}
          location={userApi.location}
          followers={userApi.followers}
          email={userApi.email}
          page={userApi.html_url}
          blog={userApi.blog}
          twitter={userApi.twitter_username}
        />
      </div>
    </>
  );
}
