import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';



function Donate() {

  return (
    <>
      <div className='absolute top-2/4 left-2/4 tranform -translate-x-2/4 -translate-y-2/4'>
        <h1>A hand up not a hand out!</h1>
      </div>
    {/* // need to connect to paypal, vinmo, and cash app */}
      <p>
        If you would like to donate to the cause please click on the link below!
      </p>
      <Link href='https://www.gofundme.com/f/yrybv-sandwiches-4-the-homeless'  type='button' />

    </>
  )
}

export default Donate;
