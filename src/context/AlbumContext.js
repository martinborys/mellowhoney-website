import React, { Children, useContext, useState } from "react";

const albumContext = React.createContext();

export function AlbumProvider({ children }) {
  const [album, setAlbum] = useState("Sentimental by Design");

  function changeAlbum(newAlbum) {
    setAlbum(newAlbum);
  }

  return (
    <albumContext.Provider value={album}>{children}</albumContext.Provider>
  );
}
