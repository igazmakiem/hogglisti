import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "helpers/hooks";

export const Song = () => {
  const { songId } = useParams();
  const {
    song: { preview, title, artist: { name } = {} },
  } = useApi({ id: songId });

  return (
    <div>
      {songId}
      <figure>
        <figcaption>
          {title}, {name}
        </figcaption>
        <audio controls src={preview}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
};
