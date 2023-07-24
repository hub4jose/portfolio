import Image from 'next/image';
import Link from 'next/link';
//import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { getProjects } from '@/sanity/sanity-utils';
import { fadeIn, textVariant } from './AnimateText';

const Projects = async () => {
  const projects = await getProjects();
  return (
    <div id="projects" className="w-full  items-center">
      <section className="mt-20 md:mt-0 max-w-6xl lg:h-full p-6 mx-auto flex flex-col justify-center items-center gap-10">
        <motion.div variants={textVariant(1)}>
          <h2 className=" relative flex justify-center">
            Featured Projects
            <span className="highlight w-[100px] md:w-[144px] border-b-[15px] mt-[18px] mr-[96px] md:mr-[140px]"></span>
          </h2>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-3 text-[#a5a3b4] text-[17px] dark:text-light max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-8 flex flex-col gap-6  w-full">
          {projects.map((project, index) => (
            <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
              <div
                key={project._id}
                className={`shadow-lg  rounded-2xl ${
                  project.slug === 'morent'
                    ? 'bg-[#5F9FFE]'
                    : project.slug === 'job-it'
                    ? 'bg-[#56B0B9]'
                    : 'bg-dark'
                }`}
              >
                <div className="overflow-hidden relative h-[400px] flex  items-center justify-center text-light gap-10 rounded-lg  ">
                  {project.images && (
                    <div
                      className={` ${
                        index % 2 === 0
                          ? '-ml-72 '
                          : 'order-last -mr-48 flex-nowrap'
                      } flex`}
                    >
                      <Image
                        src={project.images[0].asset.url}
                        alt={project.name}
                        width={500}
                        height={200}
                        className="object-cover rounded-lg "
                      />

                      <Image
                        src={project.images[1].asset.url}
                        alt={project.name}
                        width={119}
                        height={239}
                        className="object-cover rounded-lg self-end"
                      />
                    </div>
                  )}
                  <div className=" flex flex-col  w-[300px]">
                    <div className="mt-2 text-2xl font-bold">
                      {project.name}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 ">
                      {[
                        {
                          name: 'morent',
                          tech: ['ReactJS, Next.js', 'Nodejs, MongoDB'],
                        },
                        {
                          name: 'job-it',
                          tech: ['ReactJS, Next.js', 'Nodejs, MongoDB'],
                        },
                        {
                          name: 'filmempire',
                          tech: ['ReactJS, Next.js', 'Nodejs, MongoDB'],
                        },
                      ].map(
                        (tag, i) =>
                          tag.name === project.slug && (
                            <div
                              key={`${i}`}
                              className="text-xs rounded-sm flex gap-3"
                            >
                              <p className="bg-gray-300 bg-opacity-20 rounded-md p-2">
                                {tag.tech[0]}
                              </p>
                              <p className="bg-gray-300 bg-opacity-20 rounded-md p-2">
                                {tag.tech[1]}
                              </p>
                            </div>
                          )
                      )}
                    </div>
                    <Link
                      className=" flex text-xs mt-12 transition group hover:translate-x-5 "
                      href={`projects/${project.slug}`}
                    >
                      <div className=" group-hover:underline">
                        See Detail Project
                      </div>
                      <div className="">&nbsp; &#8594;</div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

//Tilt  Project cards
{
  /* <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
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
                    key={project._id}
                    className=" flex flex-col justify-center  rounded-lg p-2 hover:scale-105 transition"
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
                    <div className="mt-2 dark:text-light text-center font-bold bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-clip-text text-transparent">
                      {project.name}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      {[
                        {
                          name: 'react',
                          color: 'text-blue-500',
                        },
                        {
                          name: 'mongodb',
                          color: 'text-green-500',
                        },
                        {
                          name: 'tailwind',
                          color: 'text-pink-500',
                        },
                      ].map((tag) => (
                        <p
                          key={`${tag.name}`}
                          className={`text-[14px] ${tag.color} `}
                        >
                          #{tag.name}
                        </p>
                      ))}
                    </div>
                  </Link>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div> */
}
