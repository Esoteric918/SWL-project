import React from "react";
import Image from "next/image";

function HighLights() {
  return (
    <>
        <div className=" mx-auto pb-6 px-4 text-white text-center">
          <p className="text-xl tracking-widest uppercase ">
            Making Big Things Happen in our Community!
          </p>
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-3
        w-auto h-auto
        py-3
        ml-24
        content-center
        pb-10
        ">
          {/* item one  */}

          <div className="w-2/3 shadow-lg shadow-black dark:shadow-lg dark:shadow-slate-400">
            <div className=" ">
              <Image
                src="/SWL-images/content-pic3.jpg"
                alt={"two people next to each other"}
                className=" "
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold px-1 a">
                Making a differnce in our community
              </h3>
              <p className="text-sm px-1">
              This is Hayley! She was one of my first friends I made in the homeless community! She’s been housed for 2 years now and still volunteers regularly with SWL!
              </p>
            </div>
          </div>


        {/* item two  */}
        <div className="w-2/3 shadow-lg shadow-black dark:shadow-lg dark:shadow-slate-400">
          <div className=" ">
            <Image
              src="/SWL-images/content-pic10.jpg"
              alt={"highlights"}
              className=" "
              width={200}
              height={200}
            ></Image>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold ">
              All about the Pets
            </h3>
            <p className="text-sm ">
            We have a deep connection with our furry friends on the streets. We provide dog food, treats, and most importantly love and friendship.
            </p>
          </div>
          </div>

          {/* item three  */}
          <div className="w-2/3 shadow-lg shadow-blackdark:shadow-lg dark:shadow-slate-400">
            <div className=" ">
              <Image
                src="/SWL-images/content-pic9.jpg"
                alt={"highlights"}
                className=" "
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold ">
                Feed your sweet tooth and help the homeless!
              </h3>
              <p className="text-sm ">
              Delisa is an angel, don`t forget to visit our cookie stand at Second Chances Thrift Store… every cookie sold pays for someone to move into sober living!
              </p>
            </div>
          </div>

          {/* item four  */}
          <div className="w-2/3 shadow-lg shadow-black dark:shadow-lg dark:shadow-slate-400">
            <div className=" ">
              <Image
                src="/SWL-images/content-pic8.png"
                alt={"highlights"}
                className=" "
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold ">
                Partnering with local businesses and Churches.
              </h3>
              <p className="text-sm">
                Friends from Victory Church and Second Chance Thrift Store are
                just a few of the local businesses that have partnered with SWL
                to help the homeless community.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HighLights;
