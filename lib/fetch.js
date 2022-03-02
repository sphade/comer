import axios from "axios";

export async function fetcher(...arg) {
  const { data } = await axios.get(...arg);
  return data;
}

