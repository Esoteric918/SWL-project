import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HighLights from "./HighLights";


export default function Dashboard() {
  return (
    <>
      <div className=" bg-[url('/SWL-images/hero-image.jpg')] bg-no-repeat bg-center bg bg-cover " id="home">

      <div className="text-center h-full text-white " id="home">

        <h1 className="lg:text-7xl text-lg font-bold pt-6 hero_item ">What we do!</h1>

        <div className="hero_item grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-col-1 items-center justify-between m-24">
          <section className="text-center justify-center">
            <h2>Helping People</h2>
            <p >Getting food and suppies to the homeless</p>
            <Image src="/SWL-images/content-pic4.jpg" className="wedo_pic rounded-full mx-auto"  width={150} height={150} alt={""}/>
          </section>
          <section className="text-center  justify-center">
            <h2>Helping Pets</h2>
            <p>The homeless community includes the pets </p>
            <Image src="/SWL-images/pets_2.jpg" className="wedo_pic rounded-full mx-auto" width={150} height={150} alt={""} />
          </section>
          <section className="text-center  justify-center">
            <h2>Hand up not Hand out</h2>
            <p>Helping People get off the streets</p>
            <Image src="/SWL-images/content-pic5.jpg" className="wedo_pic rounded-full mx-auto " width={150} height={150} alt={""} />
          </section>
          <section className="text-center  justify-center">
            <h2>Making long term life changes</h2>
            <p>Getting housing and employment</p>
            <Image src="/SWL-images/content-pic6.jpg" className="wedo_pic rounded-full mx-auto " width={150} height={150} alt={""} />
          </section>
        </div>

      </div>
      <HighLights />
      </div>
    </>
  );
}
