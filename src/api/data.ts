"use client";

import axios from "axios";

export async function getData() {
  const res = await axios.get("https://randomuser.me/api/?results=6");
  const datas = res.data.results.map((results: any) => {
    return {
      ...results,
      id: results?.id,
      image_url: results?.picture?.medium,
    };
  });

  return datas;
}