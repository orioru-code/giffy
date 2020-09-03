import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import GetGifs from "../services/GetGifs";

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([]); //useState para eventos
  const { keyword } = params;
  //UseEffect hace lo que indica el primer parámetro nada más se renderiza, el segundo es una array que indica dependencias
  useEffect(() => {
    //setGifs(differentGifs)
    GetGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]); //keyword que llega del componente por prop de app es una dependencia keyword
  return (
    <div>
      {gifs.map(({ id, title, uri }) => (
        <Gif key={id} title={title} uri={uri} id={id}></Gif>
      ))}
    </div>
  );
}
