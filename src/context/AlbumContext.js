import React, { useContext, useState } from "react";

const AlbumContext = React.createContext();
const AlbumUpdateContext = React.createContext();

export function useAlbum() {
  return useContext(AlbumContext);
}

export function useAlbumUpdate() {
  return useContext(AlbumUpdateContext);
}

export function AlbumProvider({ children }) {
  const [album, setAlbum] = useState("Sentimental by Design");

  function changeAlbum(newAlbum) {
    setAlbum(newAlbum);
  }

  return (
    <AlbumContext.Provider value={album}>
      <AlbumUpdateContext.Provider value={changeAlbum}>
        {children}
      </AlbumUpdateContext.Provider>
    </AlbumContext.Provider>
  );
}
