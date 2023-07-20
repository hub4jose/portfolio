import Image from 'next/image';
import { getServices } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

const Services = async () => {
  const services = await getServices();
  return (
    <div id="services" className="w-full lg:h-screen  items-center">
      <section className="mt-20 md:mt-0 max-w-6xl lg:h-full  p-6 mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className="relative flex justify-center">
          What service do I provide
          <span className="highlight w-[88px] md:w-[120px] border-b-[15px] mt-[18px] mr-20 md:mr-24 "></span>
        </h2>
        <div className="mt-5  justify-self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {services.map((service, i) => (
            <div
              key={service._id}
              className={`h-[340px] w-[260px] flex flex-col justify-between bg-white shadow-lg group hover:bg-blue-500 rounded-lg p-6 transition duration-300 ${
                i % 2 === 0
                  ? 'md:hover:translate-y-10 md:translate-y-8'
                  : 'md:hover:-translate-y-2'
              }`}
            >
              <div className="self-start  bg-blue-500 group-hover:bg-dark dark:bg-dark p-4 rounded-md">
                {service.images && (
                  <Image
                    src={service?.images[0]?.asset.url}
                    alt={service?.title}
                    width={24}
                    height={24}
                  />
                )}
              </div>

              <div className="gap-4 text-gray-600 group-hover:text-light">
                <p className="font-bold text-xl   ">{service.title}</p>
                <div className="text-sm font-[500] ">
                  <PortableText value={service.content} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
