import React, { useState, useEffect } from "react";
import AlbumPhotos from "./AlbumPhotos";

function Details({ user }) {
  const [albums, setAlbums] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
      .then((response) => response.json())
      .then(setAlbums);
  }, [user.id]);

  const clickIt = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={clickIt}>{user.name}</button>
      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label for="name">Username:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={user.username}
            ></input>
          </li>
          <li>
            <label for="mail">E-mail:</label>
            <input
              type="email"
              id="mail"
              name="user_email"
              value={user.email}
            ></input>
          </li>
          <li>
            <label for="home-address">Home Address:</label>
            <textarea
              id="home-address"
              name="home-address"
              value={
                user.address.street +
                ", " +
                user.address.suite +
                ", " +
                user.address.city +
                ", " +
                user.address.zipcode
              }
            ></textarea>
          </li>
          <li>
            <label for="company-name">Company Name:</label>
            <input
              type="text"
              id="company-name"
              name="company_name"
              value={user.company.name}
            ></input>
          </li>
        </ul>
      </form>
      <p>
        {clicked && (
          <div>
            <h9>{user.name}'s Top 5 Albums</h9>
            {albums.slice(0, 5).map((album) => {
              return (
                <ul>
                  <button key={album.id}>
                    <AlbumPhotos album={album} />
                  </button>
                </ul>
              );
            })}
          </div>
        )}
      </p>
    </div>
  );
}

export default Details;

// <form action="/my-handling-form-page" method="post">
//   <ul>
//     <li>
//       <label for="name">Name:</label>
//       <input type="text" id="name" name="user_name">
//         {" "}
//       </input>
//     </li>
//     <li>
//       <label for="mail">E-mail:</label>
//       <input type="email" id="mail" name="user_email"></input>
//     </li>
//     <li>
//       <label for="msg">Message:</label>
//       <textarea id="msg" name="user_message"></textarea>
//     </li>
//   </ul>
// </form>
