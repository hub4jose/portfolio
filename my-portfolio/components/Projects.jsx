import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/sanity/sanity-utils';

const Projects = async () => {
  const projects = await getProjects();
  return (
    <div id="projects" className="w-full h-screen  items-center">
      <section className="max-w-6xl h-full mt-16 p-6 mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className="flex justify-center">My Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-200 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
