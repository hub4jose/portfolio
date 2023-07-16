'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from '@formspree/react';

import { PhoneIcon, EmailIcon, LocationIcon } from '@/components/Icons';

const page = () => {
  const [state, handleSubmit] = useForm('xnqkaypj');

  if (state.succeeded) {
    alert('Email sent to Joseph');
  }
  return (
    <div className="w-full  items-center ">
      <section className="max-w-6xl  p-4 md:p-6 mx-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6  p-6 place-items-center">
          <div className="hidden md:block mr-16 ">
            {' '}
            <Image
              src="/images/Contact.png"
              alt="image"
              width={200}
              height={280}
            />
          </div>
          <div className="">
            <p className=" text-center text-4xl md:text-5xl font-bold dark:text-light text-[#034694] ">
              Contact Me
            </p>
            <p className="mt-2 text-center md:text-xl font-semibold dark:text-light text-[#2974cb] ">
              Get in touch...
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 ">
          <div className=" flex  md:flex-col justify-evenly md:justify-start md:items-start md:gap-12 md:mt-4 ">
            <div className="flex flex-col gap-1 md:flex-row md:gap-3">
              <PhoneIcon className="dark:fill-light" height="40" weight="40" />

              <div className="font-semibold">
                <p className="md:text-gl dark:text-light">Call/Text</p>{' '}
                <p className=" text-xs md:text-md text-gray-500">330-XXX-XXX</p>
              </div>
            </div>

            <div className="flex flex-col gap-1  md:flex-row md:gap-3">
              <EmailIcon className="dark:fill-light" height={40} weight={40} />

              <div className="font-semibold">
                <p className="md:text-lg text-center md:text-left dark:text-light">
                  Email
                </p>{' '}
                <p className="text-xs md:text-md last: text-gray-500">
                  joseph@email.com
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1  md:flex-row md:gap-3">
              <LocationIcon
                className="dark:fill-light"
                height={40}
                weight={40}
              />

              <div className="font-semibold">
                <p className="md:text-lg dark:text-light">Location</p>
                <p className="text-xs md:text-md text-gray-500">Ohio, USA</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="col-span-1 grid grid-cols-[1fr_1fr] gap-3">
              <div className="col-span-1">
                <input
                  placeholder="Name"
                  name="name"
                  className="p-2 w-full text-xl font-semibold rounded-lg  dark:bg-slate-200"
                ></input>
              </div>

              <div className="col-span-1">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  className="p-2 w-full text-xl font-semibold rounded-lg dark:bg-slate-200"
                ></input>
              </div>

              <div className="col-span-2">
                <input
                  placeholder="Project"
                  name="project"
                  className="p-2  w-full text-xl font-semibold rounded-lg dark:bg-slate-200"
                ></input>
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="p-2 h-40 w-full text-xl font-semibold rounded-lg dark:bg-slate-200"
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
