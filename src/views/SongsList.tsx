import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "helpers/hooks";

export const SongsList = () => {
  const { songList } = useApi({ params: "*" });

  return (
    <div>
      {songList.map((item: any) => (
        <Link to={`${item?.id}`}>
          <li>{item?.artist?.name}</li>
        </Link>
      ))}
    </div>
  );
};
