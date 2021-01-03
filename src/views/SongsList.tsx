import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "hooks";

export const SongsList = () => {
  const { data } = useApi("search", "*");
  return (
    <div>
      {data.map((item: any) => (
        <Link to={`${item?.id}`}>
          <li>{item?.artist?.name}</li>
        </Link>
      ))}
    </div>
  );
};
