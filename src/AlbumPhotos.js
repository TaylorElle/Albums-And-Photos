import React, { useState, useEffect } from "react";

function AlbumPhotos({ album }) {
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [isItClicked, setIsItClicked] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
      .then((response) => response.json())
      .then(setAlbumPhotos)
      .catch((error) => console.log(error));
  }, [album.id]);

  const clickTheAlbum = () => {
    setIsItClicked(!isItClicked);
  };

  return (
    <div>
      <p onClick={clickTheAlbum}> {album.title}</p>
      <p>
        {isItClicked && (
          <div>
            <h9>Album Photo</h9>

            {albumPhotos.slice(0, 1).map((albumPhoto) => {
              return (
                <div key={albumPhoto.id}>
                  <img src={albumPhoto.thumbnailUrl} alt={albumPhoto.title} />{" "}
                  <br></br> Photo Title:
                  {albumPhoto.title}
                </div>
              );
            })}
          </div>
        )}
      </p>
    </div>
  );
}

export default AlbumPhotos;
