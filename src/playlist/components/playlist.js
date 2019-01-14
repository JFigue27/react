import React from "react";
import Media from "./media.js";
import Play from "../../icons/components/play";
import Volumen from "../../icons/components/volumen";
import Pause from "../../icons/components/pause";
import FullScreen from "../../icons/components/full-screen";

function Playlist(props) {
  const playlist = props.data.categories[0].playlist;
  console.log(props.data);
  return (
    <div>
      <Play size={50} color="red" />
      <Volumen size={50} color="blue" />
      <Pause size={50} color="orange" />
      <FullScreen size={50} color="green" />
      {playlist.map(item => {
        return <Media {...item} key={item.id} />;
      })}
    </div>
  );
}

export default Playlist;
