import React from "react";
import { Blockquote, Card, Rating, RatingStar } from "flowbite-react";

const OverviewCompany = () => {
  const products: any = [
    {
      id: "product-1",
      image: "https://asset.kompas.com/crops/kyaCGJFDEVjjEQsnrgg7hTdw50s=/0x15:780x535/1200x800/data/photo/2021/10/06/615d15f72e9bd.png",
      title: "Bitcoin",
      body: "Bitcoin is often considered (digital gold) and has the potential to increase in value over time. The limited supply of Bitcoin, capped at 21 million coins, makes it a deflationary and scarce asset",
    },
    {
      id: "product-2",
      image: "https://blog.pintu.co.id/wp-content/uploads/2024/08/token-berbasis-ethereum-1024x580.jpg",
      title: "Ethereum",
      body: "Ethereum is a popular platform for DeFi applications, which provide financial instruments without traditional intermediaries like banks.",
    },
    {
      id: "product-3",
      image: "https://imgsrv2.voi.id/Rq2Oy8pGNh2rXwmUPQW5knNGs1IkMHkoV9Wp1tdXzps/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zMTI5ODUvMjAyMzA5MjExOTU3LW1haW4ucG5n.jpg",
      title: "Tether USDt",
      body: "Tether claims to hold equivalent reserves of US dollars to back each USDT token, although this has been a subject of controversy and scrutiny.",
    },
    {
      id: "product-4",
      image: "https://s.yimg.com/ny/api/res/1.2/lZqaQ08wZ6RmGT_Lb.uFNg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/thestreet_881/e126306b30f6406d1977bed4160ee679",
      title: "XRP",
      body: "An open-source, decentralized ledger that processes transactions quickly and efficiently.",
    },
  ];
  return (<>
    <section style={{boxShadow:"0px 0px 25px", height:'600px'}} className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl">
          Company Overview
        </h2>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-5 mt-10 md:mt-16">
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-red-500 rounded-2xl h-80">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Crypto Innovations, Inc.
            </h5>
            <p className="font-normal text-gray-700">
              At Crypto Innovations, Inc., we are dedicated to leading the digital 
              financial revolution by providing cutting-edge solutions that leverage 
              the power of Bitcoin.
            </p>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-red-500 rounded-2xl h-80">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Vision
            </h5>
            <p className="font-normal text-gray-700">
            To become a global leader in the cryptocurrency industry by driving 
            innovation and adoption of Crypto as a mainstream financial asset
            </p>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-red-500 rounded-2xl h-80">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Mission
            </h5>
            <p className="font-normal text-gray-700">
              To make Crypto accessible, secure, and beneficial for everyone.
              We strive to simplify the complexities of cryptocurrency, 
              offering user-friendly platforms and services that cater 
              to both novice and experienced users.
            </p>
          </Card>
        </article>
      </div>
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl mt-5 mb-5">
          Crypto Coin
        </h2>
        <div className="flex md:flex-row flex-col mt-4 gap-12">
          {products &&
            products.map((product: any) => (
              <Card key={product.id}
                className="md:w-1/4"
                href="#"
                renderImage={() => (
                  <img
                    width={'100%'}
                    height={500}
                    className=" rounded-t-md h-40 object-cover"
                    src={product.image}
                    alt="crypto"
                  />
                )}
              >
                <div className="flex flex-col  h-full gap-4">
                  {" "}
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {product.title}
                  </h5>
                  <p className="font-normal text-gray-700 text-justify dark:text-gray-400">
                    {product.body}
                  </p>
                </div>
              </Card>
            ))}
        </div>
    </section>
    <section style={{backgroundColor:'lightgrey', zIndex:'-1', padding:'30px 3%'}} className="w-full h-full sm:mt-0 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-row-2 gap-5 mt-10 md:mt-16">
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-blue-500">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-sm md:text-base font-normal text-gray-900 ">
                CryptoSafe has exceeded all my expectations. Their platform is secure, intuitive, and easy to use. 
                I've had nothing but positive experiences with their customer service team, who are always ready to 
                help with any questions I have. My investments feel safe with CryptoSafe, and I've seen great returns
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-black">
                    Bonnie Green
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-blue-500">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-sm md:text-base font-normal text-gray-900 ">
                I've been trading with BitSphere for over two years, and their innovative approach to cryptocurrency trading has truly set them apart. Their real-time data and advanced tools have helped me make informed decisions, leading to consistent profits. BitSphere's reliability and transparency make them my go-to crypto company.
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-black">
                    The Lopez Family
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" style={{height:'240px'}} className="max-w-sm border-blue-500">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-sm md:text-base font-normal text-gray-900 ">
                As a newcomer to cryptocurrency, I was looking for a company that could guide me through the process. CoinGuardian has been fantastic, offering an easy-to-navigate platform and excellent educational resources. Their support team is always available to assist, making my journey into the crypto world smooth and stress-free.
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-black">
                    David and Laura Thompson
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </article>
      </div>
    </section>
    </>
  );
};

export default OverviewCompany;
