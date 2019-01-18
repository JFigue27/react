import React from "react";
import Media from "./media.js";

function Playlist(props) {
  console.log(props.data);
  return (
    <div>
      {props.playlist.map(item => {
        return <Media handleClick={props.handleOpenModal} {...item} key={item.id} />;
      })}
    </div>
  );
}

export default Playlist;
