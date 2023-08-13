'use client';

import Image from 'next/image';
import { PortableText } from '@portabletext/react';

import Link from 'next/link';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from './../../../../../components/AnimateText';

import { getProject, getProjects } from '@/sanity/sanity-utils';
import { UserFlow } from '../../../../../sample/static-data';
import { TargetIcon, AchievedIcon } from '@/components/Icons';

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;

  const project = await getProject(slug);
  const projects = (await getProjects()).filter(
    (project) => project.slug !== slug
  );

  return (
    <div className="p-2 md:p-8 w-full mx-auto flex flex-col justify-center items-center gap-2 md:gap-8 ">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold drop-shadow text-blue-600 dark:text-blue-500">
          {project.name}
        </h1>
      </div>

      <div className="max-w-5xl text-sm md:text-lg font-semibold text-gray-500 dark:text-light p-3 text-center">
        <PortableText value={project.content} />
      </div>
      <div className="flex justify-center items-start">
        <div>
          <Image
            src={project?.images[0]?.asset.url}
            alt={project.name}
            width={600}
            height={480}
            className="mt-5"
          />
        </div>
        <div className="hidden md:flex">
          <Image
            src={project?.images[1]?.asset.url}
            alt={project.name}
            width={120}
            height={240}
            className="mt-5"
          />
        </div>
      </div>

      <div className="flex flex-col mt-8 md:flex-row md:gap-20 items-center">
        <a
          href={project.appUrl}
          title="View Project"
          target="_target"
          rel="noopener noreferrer"
          className=" text-blue-500 text-sm font-bold py-1 px-4 whitespace-nowrap
        hover:text-blue-600 hover:translate-x-1 transition"
        >
          Demo Site &#8594;
        </a>

        <a
          href={project.codeUrl}
          title="View Project"
          target="_target"
          rel="noopener noreferrer"
          className=" text-blue-500 text-sm font-bold py-1 px-4 whitespace-nowrap
          hover:text-blue-600 hover:translate-x-1 transition"
        >
          Source Code &#8594;
        </a>
      </div>

      <div className="w-full mt-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-28 dark:bg-gray-800  bg-gray-200 md:p-10">
        <div
          className="  text-sm font-bold py-3 px-4 whitespace-nowrap
        hover:text-blue-400 hover:translate-x-1 transition dark:text-light"
        >
          <div className="text-center text-gray-500 ">MY ROLE</div>
          <div className=" md:text-lg font-bold">Software Engineer</div>
        </div>

        <div
          className="  text-sm font-bold py-3 px-4 whitespace-nowrap
        hover:text-blue-400 hover:translate-x-1 transition dark:text-light"
        >
          <div className="text-center text-gray-500">START DATE </div>
          <div className="  md:text-lg font-bold">24/06/2023</div>
        </div>

        <div
          className="text-sm font-bold py-3 px-4 whitespace-nowrap
        hover:text-blue-400 hover:translate-x-1 transition dark:text-light"
        >
          <div className="text-center text-gray-500">END DATE</div>
          <div className="  md:text-lg font-bold">08/07/2023</div>
        </div>
      </div>

      <h2 className="flex justify-center mt-24">Technologies</h2>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 md:gap-6">
        {project.skills?.map((skill) => (
          <div
            key={skill._id}
            className=" flex flex-col justify-center  rounded-lg p-2 hover:scale-105 transition"
          >
            {skill.images && (
              <Image
                src={skill?.images[0]?.asset.url}
                alt={skill?.title}
                width={80}
                height={80}
                className="object-cover rounded-full"
              />
            )}
            <p className="text-center text-xs font-medium dark:text-light">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-24 w-full text-gray-500 dark:text-light bg-gray-200 dark:bg-dark  p-3 md:p-8">
        <div className="text-sm md:w-[600px]  md:font-medium flex flex-col gap-6 m-auto items-center justify-center">
          <p>
            Morent, a cutting-edge car rental application that was developed
            using the MERN stack. The app boasts a dynamic homepage that
            showcases featured vehicles, along with convenient pickup and
            drop-off location options and a comprehensive list of available
            cars.
          </p>
          <p>
            My team and I also developed the car listing page which offers a
            search bar and various filtering options for users to find the
            perfect vehicle. Additionally, it has a car details page which
            provides users with detailed information along with suggestions for
            other recommended vehicles.
          </p>
          <p>
            Car owners are also able to list their cars for rent through our Add
            Car page, while users can easily track their rented and rented-out
            cars through their profile page. Overall, we've created an intuitive
            and user-friendly MVP version of the platform that will make renting
            a car a breeze.
          </p>
        </div>
      </div>
      <div>
        <h2 className="flex text-start mt-24">Problem Statement</h2>
        <div className=" mt-4 text-sm font-medium md:w-[600px] text-gray-500 dark:text-light  ">
          <p>
            One of the main problems that people face when looking to rent a car
            is the hassle of finding a reliable and user-friendly platform to
            search for and book rental cars. In addition, car owners who want to
            rent out their vehicles often struggle to find a suitable platform
            to list their cars and manage their rentals.
          </p>
        </div>
      </div>

      <div>
        <Image
          src={project?.images[3]?.asset.url}
          alt={project.name}
          width={800}
          height={640}
          className="mt-5"
        />
      </div>
      <h2 className="flex justify-center mt-24">HIGH-FIDELITY FIGMA DESIGN</h2>
      <div className="w-full">
        <Image
          src={project?.images[2]?.asset.url}
          alt={project.name}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          width={0}
          height={0}
          className="mt-5"
        />
      </div>

      <h2 className="flex justify-center mt-24">My Process</h2>

      <div className="  p-3 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 text-sm text-center font-bold dark:text-light">
        <div className=" flex flex-col gap-3 items-center justify-center">
          <Image
            src={project?.images[4]?.asset.url}
            alt={project.name}
            width={128}
            height={128}
            className="mt-5 hover:scale-105 transition"
          />
          <p>Definition</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={project?.images[5]?.asset.url}
            alt={project.name}
            width={128}
            height={128}
            className="mt-5 hover:scale-105 transition"
          />
          <p>Planning</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={project?.images[6]?.asset.url}
            alt={project.name}
            width={128}
            height={128}
            className="mt-5 hover:scale-105 transition"
          />
          <p>Development</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={project?.images[7]?.asset.url}
            alt={project.name}
            width={128}
            height={128}
            className="mt-5 hover:scale-105 transition"
          />
          <p>Delivery</p>
        </div>
      </div>

      <div>
        <h2 className="flex text-start mt-24">User Flow</h2>
        <div className=" mt-2 text-sm font-medium md:w-[600px]  text-gray-500 dark:text-light ">
          <p>
            In order to design the best experience, I’ve looked at the possible
            paths the user might take during their journey and examined what
            happens during each step. I usually create a map in Figma to get a
            detailed view of the User Flow.
          </p>
        </div>

        <div className="mt-4 mb-4 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 ">
          {UserFlow.CarRent.map((flow, i) => (
            <div
              key={i}
              className=" w-32 h-32 sm:w-48 sm:h-48 rounded-lg group bg-blue-100 hover:bg-blue-600 dark:bg-light dark:hover:bg-blue-400 flex flex-col  text-center justify-center"
            >
              <p className="font-semibold text-blue-700 group-hover:text-light ">
                {flow}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  bg-gray-200 dark:bg-gray-800 md:mt-24 p-4 md:p-8 ">
        <div className="flex flex-col max-w-6xl justify-center items-center  gap-6">
          <h2 className="flex  text-start">Product</h2>
          <div className="mt-4 flex justify-center items-start">
            <div>
              <Image
                src={project?.images[0]?.asset.url}
                alt={project.name}
                width={600}
                height={480}
                className="mt-5"
              />
            </div>
            <div className="hidden md:flex">
              <Image
                src={project?.images[1]?.asset.url}
                alt={project.name}
                width={120}
                height={240}
                className="mt-5"
              />
            </div>
          </div>
          <div className=" mt-8 mb-6 flex flex-col items-center">
            <a
              href={project.appUrl}
              title="View Project"
              target="_target"
              rel="noopener noreferrer"
              className=" text-blue-500 text-sm font-bold py-1 px-4 whitespace-nowrap
        hover:text-blue-600 hover:translate-x-1 transition"
            >
              Demo Site &#8594;
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-4xl gap-6">
        <h2 className="flex justify-start mt-24">Takeaways</h2>
        <div className=" text-sm font-medium  flex flex-col gap-6 m-auto  justify-center  dark:text-light  md:py-8 md:px-16 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-green-600">LEARNINGS</p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2 justify-start">
              <AchievedIcon className="h-5 w-5 fill-green-500 shrink-0" />
              <p>
                Gained extensive knowledge of full authentication and
                authorization implementation, including the use of
                industry-standard security protocols such as JSON Web Tokens
                (JWT).
              </p>
            </li>
            <li className="flex gap-2 fill-green-500 ">
              <AchievedIcon className="h-5 w-5 fill-green-500 shrink-0" />
              <p>
                Sharpened my backend skills, specifically in optimizing database
                queries, improving performance, and handling server-side logic.
              </p>
            </li>
            <li className="flex gap-2">
              <AchievedIcon className="h-5 w-5 fill-green-500 shrink-0" />
              <p>
                Learned how to properly handle files, including file upload,
                storage, and retrieval, ensuring that the app's data is
                organized and easily accessible while keeping it secure.
              </p>
            </li>
            <li className="flex gap-2">
              <AchievedIcon className="h-5 w-5 fill-green-500 shrink-0" />
              <p>
                Acquired proficiency in NextJS and implemented various features
                utilizing industry-standard best practices.
              </p>
            </li>
          </ul>
        </div>
        <div className=" text-sm font-medium flex flex-col gap-6 m-auto  justify-center  dark:text-light  md:py-8 md:px-16 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-red-700">CHALLENGES</p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2">
              <TargetIcon className="h-5 w-5 fill-red-700 shrink-0" />
              <p>
                Gained extensive knowledge of full authentication and
                authorization implementation, including the use of
                industry-standard security protocols such as JSON Web Tokens
                (JWT).
              </p>
            </li>
            <li className="flex gap-2">
              <TargetIcon className="h-5 w-5 fill-red-700 shrink-0" />
              <p>
                Sharpened my backend skills, specifically in optimizing database
                queries, improving performance, and handling server-side logic.
              </p>
            </li>
            <li className="flex gap-2">
              <TargetIcon className="h-5 w-5 fill-red-700 shrink-0" />
              <p>
                Learned how to properly handle files, including file upload,
                storage, and retrieval, ensuring that the app's data is
                organized and easily accessible while keeping it secure.
              </p>
            </li>
            <li className="flex gap-2">
              <TargetIcon className="h-5 w-5 fill-red-700 shrink-0" />
              <p>
                Acquired proficiency in NextJS and implemented various features
                utilizing industry-standard best practices.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Other Case Studies */}

      <div className=" bg-gray-200 dark:bg-gray-800 mt-24 w-full flex flex-col justify-center items-center p-4 md:p-8 md:mb-20 gap-6">
        <div className="max-w-6xl">
          <h2 className="flex justify-start">Other Case Studies</h2>

          <div className="  mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
              >
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="dark:bg-dark bg-white shadow-lg p-5 rounded-2xl sm:w-[360px] w-full"
                >
                  <div className="relative w-full h-[300px]">
                    <Link
                      className=" flex flex-col justify-evenly  rounded-lg p-2 "
                      href={`projects/${project.slug}`}
                    >
                      {project.images && (
                        <Image
                          src={project.images[0].asset.url}
                          alt={project.name}
                          width={500}
                          height={200}
                          className="object-cover rounded-lg "
                        />
                      )}
                      <div className="mt-2 dark:text-light text-center font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        {project.name.split('-')[0]}
                      </div>
                      <div className="mt-1 text-xs  text-gray-700 dark:text-light px-3 text-center">
                        <PortableText value={project.content} />
                      </div>
                      <div className=" absolute -bottom-1 right-0 text-blue-500 text-center text-sm font-medium ">
                        See Case Study &#8594;
                      </div>
                    </Link>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
