"use client";

import { useState, useEffect } from "react";
import { getData } from "@/api/data";
import { Card } from "flowbite-react";

export default function Teams() {
  const [datas, setDatas] = useState([]);

  const handleGetData = async () => {
    const data = await getData();
    setDatas(data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <section className="w-full mt-16 sm:mt-24  px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center pt-20">
      <div className="w-full flex justify-between ">
        <h2 className="w-full text-center text-gray-500 inline-block font-bold capitalize text-2xl md:text-4xl">
          Our team
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-20 mt-10 md:mt-16">
        {datas.map((results: any, index) => {
          return (
            <div key={index}>
              <article className="col-span-1 row-span-1 relative">
                <Card style={{boxShadow:'0px 0px 10px'}} className="w-full h-64 border-blue-400 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div>
                      {results?.image_url && (
                        <img
                          src={results?.image_url}
                          alt={results?.id?.name}
                          className="rounded-full w-20 h-20 m-3"
                        />
                      )}
                    </div>
                    <h5 className="mb-1 text-md font-medium text-gray-900">{`${results?.name?.title} ${results?.name?.first} ${results?.name?.last}`}</h5>
                    <span className="text-sm text-center text-black">
                      {results?.email}
                    </span>
                    <span className="text-sm text-center text-gray-500 mt-2">
                      {results?.phone}
                    </span>
                  </div>
                </Card>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
