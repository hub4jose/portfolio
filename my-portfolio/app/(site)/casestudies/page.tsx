'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { getProjects } from '@/sanity/sanity-utils';
import { fadeIn, textVariant } from './../../../components/AnimateText';

const page = async () => {
  const projects = await getProjects();
  return (
    <section className="mt-20 md:mt-0 max-w-6xl lg:h-full p-6 mx-auto flex flex-col justify-center items-center gap-10">
      <motion.div variants={textVariant()}>
        <h2 className="flex justify-center">My Projects</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-[#a5a3b4] text-[17px] dark:text-light max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default page;
