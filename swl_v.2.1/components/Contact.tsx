import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faWindowClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { url } from 'inspector';



const Contact = () => {

  return (
    <>
      <div className="container mx-auto px-4 py-8 items-center">
        <div id="fb-root"></div>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0" nonce="jNDJmCm6"></script>

        <div className="fb-page" data-href="https://www.facebook.com/sandwicheswithlove" data-tabs="timeline" data-width="300" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/sandwicheswithlove" className="fb-xfbml-parse-ignore"><Link href="https://www.facebook.com/sandwicheswithlove">Sandwiches With Love</Link></blockquote></div>
      </div>
      <div>
        <div className="container px-4 py-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let`s keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <Link href={'https://www.facebook.com/sandwicheswithlove'} >
                  <button
                    className="
                      bg-blue-500
                      text-white
                      w-8 h-8
                      rounded-full
                      outline-none
                      focus:outline-none
                      mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                    </button>
                </Link>
                <Link href={'https://www.instagram.com/sandwicheswithlove/'} >
                  <button
                      className="
                      bg-red-400
                      text-white
                      w-8 h-8
                      rounded-full
                      outline-none
                      focus:outline-none
                      mr-2"
                    type="button"
                  ><FontAwesomeIcon icon={faInstagram} />
                  </button>
                </Link>
                <Link href={''} >
                  <button
                      className="
                      bg-amber-300
                      text-white
                      w-8 h-8
                      rounded-full
                      outline-none
                      focus:outline-none
                      mr-2"
                    type="button"
                  ><FontAwesomeIcon icon={faEnvelope} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
