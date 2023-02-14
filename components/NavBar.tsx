import React, { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { faDonate, faContactBook } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [nav, setNav] = useState(false);



  console.log(nav);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center dark:bg-gradient-to-r from-red-400 to-blue-500">
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center ">
              <Image src="/SWL-images/swl-logo.jpg"
                width={50}
                height={50}
                alt={""}
                className='
                  rounded-full
                  m-2
                  dark:shadow-md
                  dark:shadow-black'/>
              <Image src="/SWL-images/SWL-navlogo4.png" width={400} height={300} alt={""} />
            </div>
            <div className='invisible md:visible mr-4'>
              <Link href='https://www.gofundme.com/f/yrybv-sandwiches-4-the-homeless' className='text-2xl '>
                <FontAwesomeIcon icon={faDonate} size='2xl' />
                Donations
              </Link>
              <Link href='atarianne@icloud.com' type='email' className='text-2xl'>
                <FontAwesomeIcon icon={faContactBook} size='2xl' />
                Contact
              </Link>
            </div>
          <div
            style={{ color: '#fff' }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
          <div

            className={
              nav
                ? 'md:hidden fixed left-0 top-0 w-3/4 h-screen bg-red-200 z-10'
                : 'hidden'
            } >
            <div className='flex justify-center '>
              <Image
                className='
                  mt-5
                  rounded-full
                  dark:shadow-md
                dark:shadow-black'
                src="/SWL-images/swl-logo.jpg"
                width={100}
                height={100}
                alt={'logo'}
              />
            </div>

            <div className='grid grid-cols-1 ml-4 mt-3 gap-2'>
              {/* set route to donate page */}
              <Link href='https://www.gofundme.com/f/yrybv-sandwiches-4-the-homeless' className='text-2xl '>
                <FontAwesomeIcon icon={faDonate} size='2xl' />
                Donations
              </Link>
              <Link href='https://www.facebook.com/sandwicheswithlove' type='email' className='text-2xl'>
                <FontAwesomeIcon icon={faContactBook} size='2xl' />
                Contact
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
