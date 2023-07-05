import { getProject } from '@/sanity/sanity-utils';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div className="">
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-extrabold drop-shadow bg-gradient-to-r from-orange-200 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <a
          href={project.appUrl}
          title="View Project"
          target="_target"
          rel="noopener noreferrer"
          className="bg-gray-200  rounded-lg text-gray-500 text-sm font-semibold py-3 px-4 whitespace-nowrap
          hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View project
        </a>
      </header>

      <div className="text-lg text-gray-700 dark:text-light mt-5">
        <PortableText value={project.content} />
      </div>
      <div className="flex">
        <div>
          <Image
            src={project?.images[0]?.asset.url}
            alt={project.name}
            width={800}
            height={640}
            className="mt-5"
          />
        </div>
        <div>
          <Image
            src={project?.images[1]?.asset.url}
            alt={project.name}
            width={150}
            height={300}
            className="mt-5"
          />
        </div>
      </div>

      <h2 className="flex justify-center mt-24">Technologies</h2>
      <div className="mt-5 grid md:grid-cols-4 lg:grid-cols-9 gap-6">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
