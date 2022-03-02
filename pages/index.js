/* eslint-disable react/no-unescaped-entities */
import { CheckCircleIcon } from "@heroicons/react/outline";
import {
  BookOpenIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  StarIcon,
} from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";

import Header from "../components/Header";
import JewerySec from "../components/JewerySec";
import ProductE from "../components/ProductE";
import Sliders from "../components/Slider";
import Tbs from "../components/Tbs";
export default function Home() {
  return (    <div className="">
      <Head>
        <title>Fat Llama | Rent (almost) anything</title>
        <meta
          name="description"
          content="Fat Llama is the trusted marketplace for renting almost anything. Rent out your stuff to earn extra money or rent from others to save, experience more and help the planet."
        />
        <link rel="icon" href="/assets/28BOOKINGS.png" />
      </Head>

      <main>
        <Banner />
        <ProductE />
        <Sliders />
        <JewerySec/>

        <div className="mt-[100px] text-center">
          <div className="space-y-4 after:w-[150px] after:h-1 after:inline-block after:bg-red-600 af after:-bottom-6 relative">
            <h1 className="text-lg md:text-3xl font-black capitalize">
              Here’s everything you can do on mutterfly.
            </h1>
            <p className="hidden md:block">
              Maximise experiences, Minimise cost.
            </p>
          </div>
          <button className="btn mt-[10px]">explore categories</button>
        </div>

        <div className="mt-[100px] md:px-10 px-5  relative">
          <h1 className="text-lg md:text-3xl font-black capitalize mb-5">
            Rent by Categories
          </h1>
        </div>
        <Tbs />

        <div className="flex md:px-10 px-5 flex-wrap md:flex-nowrap mt-[100px]  items-center">
          <div className="space-y-4 after:w-[150px] after:h-1 after:inline-block after:bg-red-600 af after:-bottom-6 relative">
            <h1 className="text-lg md:text-3xl font-black capitalize">
              Why Choose fake store
            </h1>
          </div>
          <div className="flex md:space-x-5 space-y-5 flex-wrap md:flex-nowrap justify-center items-center">
            <div className="border space-y-3">
              <CheckCircleIcon className="h-12 w-12" />
              <h2 className="font-black text-lg">Rent in 3 Clicks</h2>
              <p className="text-gray-600">
                Select your product & pay to confirm. Voila!
              </p>
            </div>
            <div className="border space-y-3">
              <CheckCircleIcon className="h-12 w-12" />
              <h2 className="font-black text-lg">Rent in 3 Clicks</h2>
              <p className="text-gray-600">
                Select your product & pay to confirm. Voila!
              </p>
            </div>
            <div className="border space-y-3">
              <CheckCircleIcon className="h-12 w-12" />
              <h2 className="font-black text-lg">Rent in 3 Clicks</h2>
              <p className="text-gray-600">
                Select your product & pay to confirm. Voila!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[100px] md:px-10 px-5">
          <div className="space-y-4 after:w-[150px] text-center after:h-1 after:inline-block after:bg-red-600 af after:-bottom-6 relative">
            <h1 className="text-lg md:text-3xl font-black capitalize ">
              Featured in
            </h1>
          </div>
          <div className="grid mt-[50px] grid-cols-4 gap-14 max-w-3xl place-items-center mx-auto">
            <Image
              src="/assets/bbc-news-logo.png"
              alt=""
              height={100}
              width={200}
            />
            <Image
              src="/assets/forbes-logo.png"
              alt=""
              height={100}
              width={200}
            />
            <Image
              src="/assets/tech-crunch-logo.png"
              alt=""
              height={100}
              width={200}
            />
            <Image
              src="/assets/times-logo.png"
              alt=""
              height={100}
              width={200}
            />
          </div>
          <div className="flex items-center justify-center md:justify-between mt-[200px] flex-wrap md:flex-nowrap">
            <div className="space-y-4 after:w-[150px]  after:h-1 after:inline-block after:bg-red-600 af after:-bottom-6 relative">
              <h1 className="text-lg md:text-3xl font-black capitalize ">
                We’re driven by our customers
              </h1>
              <p>Who help us fly higher and bring out the best in us.</p>
            </div>

            <div>
              <Image
                src="/assets/our-customers-mobile.png"
                alt="/assets/our-customers-mobile.png"
                height={500}
                width={700}
              />
            </div>
          </div>
        </div>

        <div className=" py-[70px] bg-purple-400 bg-no-repeat bg-cover mt-[100px]">
          <h1 className="text-center font-black text-4xl text-purple-300 mb-[50px]">
            mutter away...
          </h1>
          <div className="text-white flex  justify-evenly flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 text-center">
            <div className=" flex flex-col items-center space-y-2">
              <div className="flex items-center">
                <StarIcon className="h-10 w-10" />
                <span className="text-4xl font-black">200k</span>
              </div>
              <p className="text-center">100+ Google Reviews</p>
            </div>
            <div className=" flex flex-col items-center space-y-2">
              <div className="flex items-center">
                <ChartBarIcon className="h-10 w-10" />
                <span className="text-4xl font-black">200k</span>
              </div>
              <p className="text-center">100+ Google Reviews</p>
            </div>
            <div className=" flex flex-col items-center space-y-2">
              <div className="flex items-center">
                <ShoppingBagIcon className="h-10 w-10" />
                <span className="text-4xl font-black">200k</span>
              </div>
              <p className="text-center">100+ Google Reviews</p>
            </div>
            <div className=" flex flex-col items-center space-y-2">
              <div className="flex items-center">
                <BookOpenIcon className="h-10 w-10" />
                <span className="text-4xl font-black">200k</span>
              </div>
              <p className="text-center">100+ Google Reviews</p>
            </div>
          </div>
        </div>

       

        <div className="text-center space-y-14 mt-[100px]">
          <h1 className="text-3xl text-gray-700 font-black">
            But, why the name
          </h1>
          <h1 className="text-3xl  md:text-8xl font-black text-purple-600">
            Mutterfly?
          </h1>
          <p className="font-black text-gray-800 max-w-[550px] mx-auto">
            Here’s the secret! Mutterfly is a play on the word butterfly, which
            doesn’t travel far in search of resources. So why should we humans?
            The next time you need something on demand, don't Mutter but
            Mutterfly it in 3 steps .
          </p>
          <div className="btn  max-w-[150px] mx-auto">Read More</div>
        </div>
        <div className="min-h-[200px] py-[50px] mt-[100px] space-y-5 w-full bg-[url(/assets/asset18.png)] bg-no-repeat bg-cover rounded-lg flex flex-col items-center justify-center">
          <div className="space-y-4 after:w-[150px] text-center after:h-1 after:inline-block after:bg-red-600 af after:-bottom-6 relative">
            <h1 className="text-lg md:text-3xl text-white font-black capitalize ">
              Switch from Buy to Mutterfly?
            </h1>
          </div>
          <p className="text-white">
            itch from Buy to Mutterfly? It is time to own less & experience
            more.
          </p>
          <div className="btn bg-white">chat with us</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

