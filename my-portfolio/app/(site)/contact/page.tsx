'use client';
import Link from 'next/link';
import { useForm } from '@formspree/react';

import { PhoneIcon, EmailIcon, LocationIcon } from '@/components/Icons';

const page = () => {
  const [state, handleSubmit] = useForm('xnqkaypj');

  if (state.succeeded) {
    alert('Email sent to Joseph');
  }
  return (
    <div id="projects" className="w-full h-screen  items-center">
      <section className="max-w-6xl h-full p-6 mx-auto flex flex-col justify-center items-center">
        <p className="mt-16 text-center text-5xl font-bold dark:text-light text-[#034694] ">
          Contact Me
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
          <div className=" flex  md:flex-col justify-evenly  ">
            <div className="flex flex-col md:flex-row gap-3">
              <PhoneIcon className="dark:fill-light" height={48} weight={48} />

              <div className="font-semibold">
                <p className="text-xl dark:text-light">Call/Text</p>{' '}
                <p className="text-md text-gray-500">330-XXX-XXX</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <EmailIcon className="dark:fill-light" height={48} weight={48} />

              <div className="font-semibold">
                <p className="text-xl text-center md:text-left dark:text-light">
                  Email
                </p>{' '}
                <p className="text-md text-gray-500">joseph@email.com</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <LocationIcon
                className="dark:fill-light"
                height={48}
                weight={48}
              />

              <div className="font-semibold">
                <p className="text-xl dark:text-light">Location</p>
                <p className="text-md text-gray-500">Ohio, USA</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-12 md:mt-24 col-span-1 grid grid-cols-[1fr_1fr] gap-6">
              <div className="col-span-1">
                <input
                  placeholder="Name"
                  name="name"
                  className="p-2 h-20 w-full text-xl font-semibold rounded-lg  dark:bg-slate-200"
                ></input>
              </div>
              <div className="col-span-1">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  className="p-2 h-20 w-full text-xl font-semibold rounded-lg dark:bg-slate-200"
                ></input>
              </div>

              <div className="col-span-2">
                <input
                  placeholder="Project"
                  name="project"
                  className="p-2 h-20 w-full text-xl font-semibold rounded-lg dark:bg-slate-200"
                ></input>
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="p-2 h-52 w-full text-xl font-semibold rounded-lg dark:bg-slate-200"
                ></textarea>
              </div>
              <div className="text-right col-span-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="p-2 px-3 bg-[#6A7AB5] dark:bg-slate-200 font-bold text-xl text-light dark:text-dark rounded-md"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;

{
  /* <Link href="https://www.twitter.com/" target={'_blank'}>
              <TwitterIcon
                className="dark:fill-light transform hover:-translate-y-1"
                height={30}
                weight={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/" target={'_blank'}>
            <LinkedinIcon
              className="dark:fill-light transform hover:-translate-y-1"
              height={30}
              weight={30}
            />
            </Link> */
}
