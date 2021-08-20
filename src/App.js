import React, { useEffect, useState } from "react";
import Details from "./Details";

function App() {
  //use effect to fetch the info
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers);
  }, []);
  //return a map and map through it to get each individual user
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Details user={user} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
