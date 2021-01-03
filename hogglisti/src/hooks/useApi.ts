import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export const useApi = (endpoint: string, params?: string) => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState([]);
  const url = `https://${process.env.REACT_APP_HOST}/`;

  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `${url}${endpoint}`,
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_HOST,
      },
      params: { q: params },
      baseURL: url,
    };
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, params]);

  return { data, error };
};
