import { useCallback, useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { ISong } from "types";

const url = `https://${process.env.REACT_APP_HOST}/`;

export const useApi = ({ id, params }: { id?: string; params?: string }) => {
  const [{ song, songList }, setData] = useState<{ song: Partial<ISong>; songList: [{}] }>({
    song: {},
    songList: [{}],
  });

  const config: AxiosRequestConfig = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_HOST,
    },
    params: params ? { q: params } : undefined,
    baseURL: url,
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initApi = useCallback(() => axios.create(config), []);

  const getSong = useCallback(() => initApi().get(`${url}track/${id}`), [id, initApi]);

  const getSongList = useCallback(() => initApi().get(`${url}search`), [initApi]);

  useEffect(() => {
    getSong()
      .then(response => {
        setData({ song: response.data, songList: [{}] });
      })
      .catch(error => console.log("@error", error));
  }, [getSong, id]);

  useEffect(() => {
    getSongList()
      .then(response => {
        setData({ song: {}, songList: response.data.data });
      })
      .catch(error => console.log("@error", error));
  }, [getSongList, id]);

  return { song, songList };
};
