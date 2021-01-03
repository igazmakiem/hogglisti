import React from "react";
import { useParams } from "react-router-dom";

export const Song = () => {
  const { songId } = useParams();
  return <div>{songId}</div>;
};
