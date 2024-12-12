"use client"

import { getData } from "@/api/data";
import { useEffect, useState } from "react";


export default function About() {
    const [datas, setDatas] = useState([]);

    const handleGetData = async () => {
        const data = await getData();
        setDatas(data);
    };

    useEffect(() => {
        handleGetData();
    }, []);


    return (
      <div className="container mx-auto px-4 py-12 space-y-12 mt-32">
        <section>
          <h1 className="text-4xl font-bold mb-6">About Crypto Company</h1>
          <p className="text-lg mb-4">
            Crypto Innovations Inc. is a leading company in the cryptocurrency space, dedicated to providing cutting-edge solutions for digital transactions and investments. Our mission is to make cryptocurrency accessible and beneficial for everyone, from individual investors to large enterprises.
          </p>
          <p className="text-lg mb-4">
            Our mission is to empower organizations with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage.
          </p>
        </section>
  
        <section>
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <ul className="space-y-4">
            <li>
              <strong>2010:</strong> The company was founded by a group of cryptography enthusiasts.
            </li>
            <li>
              <strong>2013:</strong> Launched its first cryptocurrency, aiming to provide secure and decentralized financial transactions.
            </li>
            <li>
              <strong>2016:</strong> Introduced a user-friendly wallet service to store and manage digital assets.
            </li>
            <li>
              <strong>2019:</strong> Experienced significant growth during the cryptocurrency boom, expanding its services and user base.
            </li>
            <li>
              <strong>2022:</strong> Implemented advanced security measures to protect users' assets and data.
            </li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
          <p className="text-lg mb-4">
          At Crypto Innovations Inc., we pride ourselves on fostering a dynamic, inclusive, and forward-thinking work environment. Our company culture is built on a foundation of innovation, collaboration, and integrity, ensuring that every team member feels valued and empowered to contribute to our shared success. Here’s a closer look at what defines our culture:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovation and Creativity: We thrive on pushing the boundaries of technology and continually exploring new ideas.</li>
            <li>Collaboration and Teamwork: Collaboration is at the heart of everything we do.</li>
            <li>Integrity and Transparency: Integrity is the cornerstone of our business.</li>
            <li>Continuous Learning and Growth: We believe in the power of continuous learning and professional development.</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {datas.map((results: any, index) => (
              <div key={index} className="text-center">
                <img src={results?.image_url} alt={results?.id?.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{results?.id?.name}</h3>
                <p>{results?.name?.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }