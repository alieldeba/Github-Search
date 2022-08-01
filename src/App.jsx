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
    setUser(name);
  }

  return (
    <>
      <div className="container">
        <Search
          setUserName={setUserName}
          getUserApi={getUserApi}
        />
        <States
          img={userApi.avatar_url}
          bio={userApi.bio}
          blog={userApi.blog}
          company={userApi.company}
          page={userApi.html_url}
          location={userApi.location}
          name={userApi.name}
          twitter={userApi.twitter_username}
        />
      </div>
    </>
  );
}
